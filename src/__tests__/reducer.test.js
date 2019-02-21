import reducer from '../reducer';
import { restartGame, makeGuess, generateAuralUpdate } from '../actions';

describe('reducer', () => {
  const testState = {
    guesses: [0, 20],
    feedback: "You're Warm.",
    auralStatus: null,
    correctAnswer: 30
  };

  it('should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, { type: '__UNKNOWN' });
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.auralStatus).toEqual('');
    expect(state.correctAnswer).toBeGreaterThan(0);
    expect(state.correctAnswer).not.toBeGreaterThan(100);
  });

  it('should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, { type: '__UNKNOWN' });
    expect(state).toBe(currentState);
  });

  describe('restartGame', () => {
    it('should reset the game to its initial state', () => {
      const correctAnswer = 42;
      const state = reducer(testState, restartGame(correctAnswer));
      expect(state.guesses).toEqual([]);
      expect(state.feedback).toEqual('Make your guess!');
      expect(state.auralStatus).toEqual('');
      expect(state.correctAnswer).toBeGreaterThan(0);
      expect(state.correctAnswer).not.toBeGreaterThan(100);
    });
  });

  describe('makeGuess', () => {
    it('should set feedback based on difference between guess and correct answer', () => {
      let state;
      state = reducer(testState, makeGuess(100));
      expect(state.feedback).toEqual("You're Ice Cold...");
      state = reducer(testState, makeGuess(60));
      expect(state.feedback).toEqual("You're Cold...");
      state = reducer(testState, makeGuess(20));
      expect(state.feedback).toEqual("You're Warm.");
      state = reducer(testState, makeGuess(29));
      expect(state.feedback).toEqual("You're Hot!");
      state = reducer(testState, makeGuess(30));
      expect(state.feedback).toEqual("You got it!");
      // If the guess is not a number...
      state = reducer(testState, makeGuess('Twelve'));
      expect(state.feedback).toEqual("Please enter a valid number.");
    });

    it('should store the guess', () => {
      const state = reducer(testState, makeGuess(42));
      expect(state.guesses.length).toEqual(3);
      expect(state.guesses[2]).toEqual(42);
    });
  });

  describe('generateAuralUpdate', () => {
    it('should assign a generated aural update string based on feedback and guesses', () => {
      const state = reducer(testState, generateAuralUpdate());
      expect(state.auralStatus).not.toBe(null);
    });
  });
});
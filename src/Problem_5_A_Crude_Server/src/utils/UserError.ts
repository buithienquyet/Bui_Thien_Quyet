class UserError extends Error {
  constructor(public code: string, public message: string) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, UserError.prototype);
  }
}

Object.defineProperty(UserError.prototype, 'toJSON', {
  value: function () {
    return {
      code: this.code,
      message: this.message,
    };
  },
  configurable: true,
  writable: true,
});

export default UserError;

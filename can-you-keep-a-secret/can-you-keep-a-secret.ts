export function createSecretHolder(secret: any) {
  return new Obj(secret)
}

class Obj {
  _secret: any
  constructor(secret: any) {
    this._secret = secret
  }

  getSecret() {
    return this._secret
  }

  setSecret(value: any) {
    this._secret = value
  }
}

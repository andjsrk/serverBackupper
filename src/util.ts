import { ALPHABET } from './constants'

export default class Util {
	static checkNotVoid(value: unknown): value is notVoid {
		return Util.checkNull(value) && Util.checkUndefined(value)
	}
	static checkUndefined(value: unknown): value is undefined {
		return value !== undefined
	}
	static checkNull(value: unknown): value is null {
		return value !== null
	}
	static makeId(length: number, idArray: string[]): string {
		const JOINED_ALPHABET = `${ALPHABET.LOWER}${ALPHABET.UPPER}`
		let id = ''
		for (let i = 0; i < length; i++) id += JOINED_ALPHABET[Util.random(0, JOINED_ALPHABET.length - 1)]
		if (idArray.includes(id)) return Util.makeId(length, idArray)
		return id
	}
	static random(min: number, max: number) {
		if (/[^0-9+-]/.test(String(min)) || /[^0-9+-]/.test(String(max))) throw new Error('only integer can be used for argument.')
		return Math.floor(Math.random() * (max - min + 1)) + min
	}
}

type notVoid = undefined!
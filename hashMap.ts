export class hashMap {
  buckets: object;
  capacity = 16;
  loadFactor = 0.8;
  constructor() {
    this.buckets = {};
  }

  set(key: string, value) {
    const hashedKey = hash(key);
    if (!this.buckets[hashedKey]) {
      this.buckets[hashedKey] = [];
    }
    const bucket: Array<any> = this.buckets[hashedKey];
    const existingIndex = bucket.findIndex(([k]) => k === key);
    if (existingIndex >= 0) {
      bucket[existingIndex][1] = value;
    } else {
      bucket.push([key, value]);
      if (this.length() / this.capacity > this.loadFactor) {
        this.grow();
      }
    }
  }

  get(key: string) {
    const hashedKey = hash(key);
    const bucket = this.buckets[hashedKey];
    if (bucket) {
      const entry = bucket.find(([k]) => k === key);
      return entry ? entry[1] : null;
    }
    return null;
  }

  has(key: string) {
    const hashedKey = hash(key);
    const bucket: Array<any> = this.buckets[hashedKey];
    return bucket ? bucket.some(([k]) => k === key) : false;
  }

  remove(key: string) {
    const hashedKey = hash(key);
    const bucket = this.buckets[hashedKey];
    if (bucket) {
      const index = bucket.findIndex(([k]) => k === key);
      if (index >= 0) {
        bucket.splice(index, 1);
        if (bucket.length === 0) {
          delete this.buckets[hashedKey];
        }
        return true;
      }
    }
    return false;
  }

  length() {
    return Object.keys(this.buckets).length;
  }

  clear() {
    this.buckets = {};
  }

  keys() {
    return Object.keys(this.buckets);
  }

  values() {
    const valuesArray: Array<string> = [];
    for (const bucket of Object.values(this.buckets)) {
      for (const [, value] of bucket) {
        valuesArray.push(value);
      }
    }
    return valuesArray;
  }

  entries() {
    const entriesArray: Array<[string, any]> = [];
    for (const bucket of Object.values(this.buckets)) {
      for (const [key, value] of bucket) {
        entriesArray.push([key, value]);
      }
    }
    return entriesArray;
  }

  grow() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = {};
    for (const bucket of Object.values(oldBuckets)) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }
}

function hash(key: string) {
  let hashCode = 0;
  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
  }
  return hashCode;
}

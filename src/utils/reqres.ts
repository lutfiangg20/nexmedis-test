
export class Reqres {
  url: string;

  constructor() {
    this.url = 'https://reqres.in/api';
  }

  async get(path: string) {
    const response = await fetch(`${this.url}${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return response
  }

  async post(path: string, data?: any) {
    const response = await fetch(`${this.url}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response
  }

  async put(path: string, data?: any) {
    const response = await fetch(`${this.url}${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response
  }

  async delete(path: string) {
    const response = await fetch(`${this.url}${path}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return response
  }

}

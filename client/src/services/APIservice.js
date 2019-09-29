export default class BookAPIService {
    async getResource(url) {
        const res = await fetch(`${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
    }
    async getAllApartments() {
        const Apartments = await this.getResource(`/Home`);
        return Apartments;
    }
}
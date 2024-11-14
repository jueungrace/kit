export const GET = () => {
	const response = new Response('foo');
	// this simulates immutable Response Headers, like those returned by undici
	Object.defineProperty(response.headers, 'append', { value: null });
	Object.defineProperty(response.headers, 'set', { value: null });
	return response;
};

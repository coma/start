let mockDelay, mockError;

const mock = () => jest.genMockFunction().mockReturnThis();

const mockResponse = {
    status: () => 200,
    ok: true,
    get: jest.genMockFunction(),
    toError: jest.genMockFunction()
};

const Request = {
    post: mock(),
    get: mock(),
    send: mock(),
    query: mock(),
    field: mock(),
    set: mock(),
    accept: mock(),
    timeout: mock(),
    end: jest.genMockFunction().mockImplementation(callback => {

        if (mockDelay) {

            this.delayTimer = setTimeout(callback, 0, mockError, mockResponse);
            return;
        }

        callback(mockError, mockResponse);
    }),
    __setMockDelay: v => mockDelay = v,
    __setMockResponse: v => mockResponse = v,
    __setMockError: v => mockError = v,
    __setMockResponseBody: v => mockResponse.body = v
};

export default Request;

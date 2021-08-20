const {selectMinVertex, dijkstra} = require('./index');

describe('selectMinVertex', () => {
  test('should return 0th vertex in first pick', () => {
    const processedVertices = [false, false, false, false, false, false];
    const inf = Number.MAX_VALUE;
    const vertexValues = [0, inf, inf, inf, inf, inf];
    expect(selectMinVertex(processedVertices, vertexValues)).toEqual(0);
  });

  test('should return 1th vertex', () => {
    const processedVertices = [true, false, false, false, false, false];
    const inf = Number.MAX_VALUE;
    const vertexValues = [0, 1, 4, inf, inf, inf];
    expect(selectMinVertex(processedVertices, vertexValues)).toEqual(1);
  });

  test('should return 3rd vertex', () => {
    const processedVertices = [true, true, false, false, false, false];
    const inf = Number.MAX_VALUE;
    const vertexValues = [0, 1, 4, 3, 8, inf];
    expect(selectMinVertex(processedVertices, vertexValues)).toEqual(3);
  });

  test('should return 2nd vertex', () => {
    const processedVertices = [true, true, false, true, false, false];
    const vertexValues = [0, 1, 4, 3, 7, 9];
    expect(selectMinVertex(processedVertices, vertexValues)).toEqual(2);
  });
});

describe('dijkstra', () => {
  const graph = [[0, 1, 4, 0, 0, 0],
    [1, 0, 4, 2, 7, 0],
    [4, 4, 0, 3, 5, 0],
    [0, 2, 3, 0, 4, 6],
    [0, 7, 5, 4, 0, 7],
    [0, 0, 0, 6, 7, 0]];
  dijkstra(graph);
  // expect(dijkstra()).toEqual();
});
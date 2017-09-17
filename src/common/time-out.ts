export const TimeOut = (ms: number): Promise<{}> => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
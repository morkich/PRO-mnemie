export const getEventLoopItemsState = (state) => {
  return state.eventLoop.events;
}

export const getEventLoopLoadingState = (state) => {
  return state.eventLoop.loadingEventLoop;
}

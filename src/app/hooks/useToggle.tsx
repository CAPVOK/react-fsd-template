import { useCallback, useState } from "react";

type UseToggleReturn = [boolean, (newState?: boolean) => void];

/**
 * useToggle - кастомный хук для переключения состояния между true и false.
 *
 * @param {boolean} initialState - начальное состояние, по умолчанию false.
 * @returns {[boolean, (newState?: boolean) => void]} - массив, состоящий из текущего состояния и функции для его переключения.
 *
 * Пример использования:
 * const [isToggled, toggle] = useToggle();
 * toggle(); // Переключение на противоположное состояние
 * toggle(true); // Установка состояния в true
 * toggle(false); // Установка состояния в false
 */
export const useToggle = (initialState: boolean = false): UseToggleReturn => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback((newState?: boolean) => {
    setState((prevState) => (newState !== undefined ? newState : !prevState));
  }, []);

  return [state, toggle];
};

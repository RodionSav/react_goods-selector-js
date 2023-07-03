import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      {selectedGood
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGood('')}
            />
          </h1>
        )
        : <h1 className="title">No goods selected</h1>}

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const hasGood = selectedGood === good;

            return (
              hasGood ? (
                <tr
                  className="has-background-success-light"
                  key={good}
                  data-cy="Good"
                >
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="is-info"
                      onClick={() => setSelectedGood('')}
                    >
                      -
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              ) : (
                <tr
                  key={good}
                  data-cy="Good"
                >
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setSelectedGood(good)}
                    >
                      +
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

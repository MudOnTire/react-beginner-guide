import React from 'react';

export default class MyList extends React.Component {

  static items = [
    { id: 'a', value: 'apple' },
    { id: 'b', value: 'orange' },
    { id: 'c', value: 'grape' },
    { id: 'd', value: 'pear' }
  ]

  render() {
    return (
      <div>
        {
          MyList.items.map(item => (
            <div key={item.id}>{item.value}</div>
          ))
        }
      </div>
    )
  }
}
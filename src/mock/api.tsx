const api = {
  games: [
    {
      id: 1,
      game_name: 'Spades',
      game_description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, commodi ea eos ex exercitationem minus nobis numquam perferendis quia quibusdam, repellat sunt, temporibus ut! Dolor eos error illum inventore praesentium.',
      deck: ['A1'],
      min_players: 4,
      max_players: 4,
      team_size: 2,
      game_rules: {
        rule1: 'rule',
      },
      starting_state: {},
    },
  ],
  users: [
    {
      id: 1,
      email: 'jstahlnecker@me.com',
      first_name: 'Jeff',
      last_name: 'Stahlnecker',
      display_name: 'Stahldom',
      admin: true,
    },
  ],
}

export default api

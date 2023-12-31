import { ref } from "vue";
import { type GameData } from "../store/game";
import { type Map } from "../store/map";

export interface LevelGameData {
    map: Map;
    player: {
        x: number,
        y: number,
    };
    cargos: { x: number, y: number }[];
    targets: { x: number, y: number }[];
}

export const levelGameData = {
    player: {
        x: 1,
        y: 1,
    },
    map: [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
    ],
    cargos: [
        {
            x: 2,
            y: 2,
        },
        {
            x: 3,
            y: 3,
        },
    ],
    targets: [
        {
            x: 4,
            y: 3,
        },
        {
            x: 6,
            y: 3,
        },
    ],
};

export const gameData: any = ref<GameData>([
    
    {
        "map": [
          [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          [
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            1
          ],
          [
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            1
          ],
          [
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            1
          ],
          [
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            1
          ],
          [
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            1
          ],
          [
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            1
          ],
          [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ]
        ],
        "player": {
          "x": 2,
          "y": 3
        },
        "cargos": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "targets": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      }
        ,      
    {
        "map": [
            [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            [
                1,
                2,
                2,
                2,
                2,
                2,
                1,
                1
            ],
            [
                1,
                2,
                2,
                2,
                2,
                2,
                2,
                1
            ],
            [
                1,
                2,
                2,
                2,
                2,
                2,
                2,
                1
            ],
            [
                1,
                2,
                2,
                2,
                2,
                2,
                2,
                1
            ],
            [
                1,
                2,
                2,
                2,
                2,
                2,
                2,
                1
            ],
            [
                1,
                2,
                2,
                2,
                2,
                2,
                2,
                1
            ],
            [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ]
        ],
        "player": {
            "x": 2,
            "y": 4
        },
        "cargos": [
            {
                "x": 4,
                "y": 4
            }
        ],
        "targets": [
            {
                "x": 5,
                "y": 6
            }
        ]
    }
    , levelGameData, {
        player: {
            x: 2,
            y: 1,
        },
        map: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 2, 2, 2, 2, 2, 1],
            [1, 2, 2, 2, 2, 2, 2, 1],
            [1, 2, 2, 2, 2, 2, 2, 1],
            [1, 2, 2, 2, 2, 2, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
        ],
        cargos: [
            {
                x: 2,
                y: 2,
            },
            {
                x: 3,
                y: 3,
            },
        ],
        targets: [
            {
                x: 4,
                y: 3,
            },
            {
                x: 6,
                y: 3,
            },
        ],
    }])
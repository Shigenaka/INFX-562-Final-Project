var tree1 = [
    {
        "name" : "1",
        "variable" : "Petal Length",
        "splitVal" : 1.7,
        "parent" : "null",
        "class" : "null",
        "children" : [
            {
                "name": "2",
                "variable" : "null",
                "splitVal" : null,
                "parent": "1",
                "class" : "Setosa"
            },
            {
                "name" : "3",
                "variable" : "Petal Width",
                "splitVal" : 1.6,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "4",
                        "variable" : "Sepal Width",
                        "splitVal" : 2.8,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "5",
                                "variable" : "Petal Width",
                                "splitVal" : 1.2,
                                "parent" : "4",
                                "class" : "null",
                                "children" : [
                                    {
                                        "name": "6",
                                        "variable" : "null",
                                        "splitVal" : null,
                                        "parent": "5",
                                        "class" : "Versicolor"
                                    },
                                    {
                                        "name": "7",
                                        "variable" : "null",
                                        "splitVal" : null,
                                        "parent": "5",
                                        "class" : "Versicolor"
                                    }
                                ]
                            },
                            {
                                "name": "8",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Versicolor"
                            }
                        ]
                    },
                    {
                        "name": "9",
                        "variable" : "null",
                        "splitVal" : null,
                        "parent": "3",
                        "class" : "Virginica"
                    }
                ]
            }
        ]
    }
]

var tree2 = [
    {
        "name" : "1",
        "variable" : "Petal Width",
        "splitVal" : 0.6,
        "parent" : "null",
        "class" : "null",
        "children" : [
            {
                "name": "2",
                "variable" : "null",
                "splitVal" : null,
                "parent": "1",
                "class" : "Setosa"
            },
            {
                "name" : "3",
                "variable" : "Petal Length",
                "splitVal" : 4.7,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "4",
                        "variable" : "Petal Width",
                        "splitVal" : null,
                        "parent" : "3",
                        "class" : "Versicolor"
                    },
                    {
                        "name" : "5",
                        "variable" : "Petal Width",
                        "splitVal" : 1.6,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name": "6",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "5",
                                "class" : "Versicolor"
                            },
                            {
                                "name": "7",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "5",
                                "class" : "Virginica"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

var tree3 = [
    {
        "name" : "1",
        "variable" : "Sepal Length",
        "splitVal" : 5.4,
        "parent" : "null",
        "class" : "null",
        "children" : [
            {
                "name" : "2",
                "variable" : "Petal Length",
                "splitVal" : 1.6,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "3",
                        "variable" : "null",
                        "splitVal" : null,
                        "parent": "2",
                        "class" : "Setosa"
                    },
                    {
                        "name" : "4",
                        "variable" : "null",
                        "splitVal" : null,
                        "parent": "2",
                        "class" : "Setosa"
                    }
                ]
            },
            {
                "name" : "5",
                "variable" : "Petal Length",
                "splitVal" : 3.3,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "6",
                        "variable" : "Petal Length",
                        "splitVal" : 4.7,
                        "parent" : "5",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "7",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "6",
                                "class" : "Versicolor"
                            },
                            {
                                "name" : "8",
                                "variable" : "Petal Length",
                                "splitVal" : 1.7,
                                "parent" : "5",
                                "class" : "null",
                                "children" : [
                                    {
                                        "name" : "9",
                                        "variable" : "null",
                                        "splitVal" : null,
                                        "parent": "8",
                                        "class" : "Versicolor"
                                    },
                                    {
                                        "name" : "10",
                                        "variable" : "null",
                                        "splitVal" : null,
                                        "parent": "8",
                                        "class" : "Virginica"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name" : "11",
                        "variable" : "null",
                        "splitVal" : null,
                        "parent": "5",
                        "class" : "Virginica"
                    }
                ]
            }
        ]
    }
]

var tree4 = [
    {
        "name" : "1",
        "variable" : "Petal Width",
        "splitVal" : 0.6,
        "parent" : "null",
        "class" : "null",
        "children" : [
            {
                "name": "2",
                "variable" : "null",
                "splitVal" : null,
                "parent": "1",
                "class" : "Setosa"
            },
            {
                "name" : "3",
                "variable" : "Petal Width",
                "splitVal" : 1.6,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "4",
                        "variable" : "Petal Length",
                        "splitVal" : 4.9,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "5",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Versicolor"
                            },
                            {
                                "name" : "6",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Virginica"
                            }
                        ]
                    },
                    {
                        "name" : "7",
                        "variable" : "Petal Length",
                        "splitVal" : 4.9,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "8",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "7",
                                "class" : "Virginica"
                            },
                            {
                                "name" : "9",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "7",
                                "class" : "Virginica"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

var tree5 = [
    {
        "name" : "1",
        "variable" : "Petal Length",
        "splitVal" : 1.7,
        "parent" : "null",
        "class" : "null",
        "children" : [
            {
                "name" : "2",
                "variable" : "null",
                "splitVal" : null,
                "parent": "1",
                "class" : "Setosa"
            },
            {
                "name" : "3",
                "variable" : "Petal Width",
                "splitVal" : 1.7,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "4",
                        "variable" : "Petal Width",
                        "splitVal" : 1.4,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "5",
                                "variable" : "Petal Length",
                                "splitVal" : 4.3,
                                "parent" : "4",
                                "class" : "null",
                                "children" : [
                                    {
                                        "name" : "6",
                                        "variable" : "null",
                                        "splitVal" : null,
                                        "parent": "5",
                                        "class" : "Versicolor"
                                    },
                                    {
                                        "name" : "7",
                                        "variable" : "null",
                                        "splitVal" : null,
                                        "parent": "5",
                                        "class" : "Versicolor"
                                    }
                                ]
                            },
                            {
                                "name" : "8",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Versicolor"
                            }
                        ]
                    },
                    {
                        "name" : "9",
                        "variable" : "Petal Length",
                        "splitVal" : 5,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "10",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Virginica"
                            },
                            {
                                "name" : "11",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Virginica"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

var tree6 = [
    {
        "name" : "1",
        "variable" : "Petal Width",
        "splitVal" : 0.5,
        "parent" : "null",
        "class" : "null",
        "children" : [
            {
                "name" : "2",
                "variable" : "null",
                "splitVal" : null,
                "parent": "1",
                "class" : "Setosa"
            },
            {
                "name" : "3",
                "variable" : "Petal Width",
                "splitVal" : 1.6,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "4",
                        "variable" : "Petal Width",
                        "splitVal" : 1.3,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "5",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Versicolor"
                            },
                            {
                                "name" : "6",
                                "variable" : "Petal Width",
                                "splitVal" : 2.8,
                                "parent" : "4",
                                "class" : "null",
                                "children" : [
                                    {
                                        "name" : "7",
                                        "variable" : "null",
                                        "splitVal" : null,
                                        "parent": "6",
                                        "class" : "Versicolor"
                                    },
                                    {
                                        "name" : "8",
                                        "variable" : "null",
                                        "splitVal" : null,
                                        "parent": "6",
                                        "class" : "Versicolor"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name" : "9",
                        "variable" : "Petal Width",
                        "splitVal" : 1.8,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "10",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "9",
                                "class" : "Virginica"
                            },
                            {
                                "name" : "11",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "9",
                                "class" : "Virginica"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

var tree7 = [
    {
        "name" : "1",
        "variable" : "Sepal Length",
        "splitVal" : 5.5,
        "parent" : "null",
        "class" : "null",
        "children" : [
            {
                "name" : "2",
                "variable" : "Petal Length",
                "splitVal" : 1.6,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "3",
                        "variable" : "null",
                        "splitVal" : null,
                        "parent": "2",
                        "class" : "Setosa"
                    },
                    {
                        "name" : "4",
                        "variable" : "null",
                        "splitVal" : null,
                        "parent": "2",
                        "class" : "Versicolor"
                    }
                ]
            },
            {
                "name" : "5",
                "variable" : "Petal Width",
                "splitVal" : 1.6,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "6",
                        "variable" : "Petal Length",
                        "splitVal" : 1.6,
                        "parent" : "5",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "7",
                                "variable" : "Sepal Width",
                                "splitVal" : 1.6,
                                "parent" : "6",
                                "class" : "null",
                                "children" : [
                                    {
                                        "name" : "8",
                                        "variable" : "null",
                                        "splitVal" : null,
                                        "parent": "7",
                                        "class" : "Versicolor"
                                    },
                                    {
                                        "name" : "9",
                                        "variable" : "null",
                                        "splitVal" : null,
                                        "parent": "7",
                                        "class" : "Versicolor"
                                    }
                                ]
                            },
                            {
                                "name" : "10",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "7",
                                "class" : "Versicolor"
                            }
                        ]
                    },
                    {
                        "name" : "9",
                        "variable" : "null",
                        "splitVal" : null,
                        "parent": "7",
                        "class" : "Virginica"
                    }
                ]
            }
        ]
    }
]

var tree8 = [
    {
        "name" : "1",
        "variable" : "Petal Length",
        "splitVal" : 1.7,
        "parent" : "null",
        "class" : "null",
        "children" : [
            {
                "name" : "2",
                "variable" : "null",
                "splitVal" : null,
                "parent": "1",
                "class" : "Setosa"
            },
            {
                "name" : "3",
                "variable" : "Petal Width",
                "splitVal" : 1.7,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "4",
                        "variable" : "Petal Width",
                        "splitVal" : 1.7,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "5",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Versicolor"
                            },
                            {
                                "name" : "6",
                                "variable" : "Petal Width",
                                "splitVal" : 1.7,
                                "parent" : "4",
                                "class" : "null",
                                "children" : [
                                    {
                                        "name" : "7",
                                        "variable" : "null",
                                        "splitVal" : null,
                                        "parent": "6",
                                        "class" : "Versicolor"
                                    },
                                    {
                                        "name" : "8",
                                        "variable" : "null",
                                        "splitVal" : null,
                                        "parent": "6",
                                        "class" : "Versicolor"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name" : "9",
                        "variable" : "null",
                        "splitVal" : null,
                        "parent": "3",
                        "class" : "Virginica"
                    }
                ]
            }
        ]
    }
]

var tree9 = [
    {
        "name" : "1",
        "variable" : "Petal Length",
        "splitVal" : 1.9,
        "parent" : "null",
        "class" : "null",
        "children" : [
            {
                "name" : "2",
                "variable" : "null",
                "splitVal" : null,
                "parent": "1",
                "class" : "Setosa"
            },
            {
                "name" : "3",
                "variable" : "Petal Width",
                "splitVal" : 1.7,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "4",
                        "variable" : "Petal Width",
                        "splitVal" : 1.4,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "5",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "3",
                                "class" : "Versicolor"
                            },
                            {
                                "name" : "6",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "3",
                                "class" : "Versicolor"
                            }
                        ]
                    },
                    {
                        "name" : "7",
                        "variable" : "Petal Width",
                        "splitVal" : 4.9,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "8",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "7",
                                "class" : "Virginica"
                            },
                            {
                                "name" : "9",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "7",
                                "class" : "Virginica"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

var tree10 = [
    {
        "name" : "1",
        "variable" : "Petal Length",
        "splitVal" : 1.9,
        "parent" : "null",
        "class" : "null",
        "children" : [
            {
                "name" : "2",
                "variable" : "null",
                "splitVal" : null,
                "parent": "1",
                "class" : "Setosa"
            },
            {
                "name" : "3",
                "variable" : "Petal Width",
                "splitVal" : 1.7,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "4",
                        "variable" : "Petal Length",
                        "splitVal" : 4.9,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "5",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Versicolor"
                            },
                            {
                                "name" : "6",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "1",
                                "class" : "Virginica"
                            }
                        ]
                    },
                    {
                        "name" : "7",
                        "variable" : "null",
                        "splitVal" : null,
                        "parent": "3",
                        "class" : "Virginica"
                    }
                ]
            }
        ]
    }
]

var tree11 = [
    {
        "name" : "1",
        "variable" : "Petal Length",
        "splitVal" : 1.9,
        "parent" : "null",
        "class" : "null",
        "children" : [
            {
                "name" : "2",
                "variable" : "null",
                "splitVal" : null,
                "parent": "1",
                "class" : "Setosa"
            },
            {
                "name" : "3",
                "variable" : "Petal Length",
                "splitVal" : 4.8,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "4",
                        "variable" : "null",
                        "splitVal" : null,
                        "parent": "3",
                        "class" : "Versicolor"
                    },
                    {
                        "name" : "5",
                        "variable" : "Petal Width",
                        "splitVal" : 1.7,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "6",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "5",
                                "class" : "Versicolor"
                            },
                            {
                                "name" : "7",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "5",
                                "class" : "Virginica"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

var tree12 = [
    {
        "name" : "1",
        "variable" : "Petal Length",
        "splitVal" : 1.9,
        "parent" : "null",
        "class" : "null",
        "children" : [
            {
                "name" : "2",
                "variable" : "null",
                "splitVal" : null,
                "parent": "1",
                "class" : "Setosa"
            },
            {
                "name" : "3",
                "variable" : "Sepal Width",
                "splitVal" : 6.2,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "4",
                        "variable" : "Petal Length",
                        "splitVal" : 4.7,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "5",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Versicolor"
                            },
                            {
                                "name" : "6",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Virginica"
                            }
                        ]
                    },
                    {
                        "name" : "7",
                        "variable" : "Petal Width",
                        "splitVal" : 1.7,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "8",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "7",
                                "class" : "Versicolor"
                            },
                            {
                                "name" : "9",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "7",
                                "class" : "Virginica"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

var tree13 = [
    {
        "name" : "1",
        "variable" : "Petal Length",
        "splitVal" : 1.9,
        "parent" : "null",
        "class" : "null",
        "children" : [
            {
                "name" : "2",
                "variable" : "null",
                "splitVal" : null,
                "parent": "1",
                "class" : "Setosa"
            },
            {
                "name" : "3",
                "variable" : "Petal Width",
                "splitVal" : 1.7,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "4",
                        "variable" : "Petal Width",
                        "splitVal" : 4.9,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "5",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Versicolor"
                            },
                            {
                                "name" : "6",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Virginica"
                            }
                        ]
                    },
                    {
                        "name" : "7",
                        "variable" : "null",
                        "splitVal" : null,
                        "parent": "3",
                        "class" : "Virginica"
                    }
                ]
            }
        ]
    }
]

var tree14 = [
    {
        "name" : "1",
        "variable" : "Sepal Length",
        "splitVal" : 5.5,
        "parent" : "null",
        "class" : "null",
        "children" : [
            {
                "name" : "2",
                "variable" : "Petal Length",
                "splitVal" : 1.9,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "3",
                        "variable" : "null",
                        "splitVal" : null,
                        "parent": "2",
                        "class" : "Virginica"
                    },
                    {
                        "name" : "4",
                        "variable" : "null",
                        "splitVal" : null,
                        "parent": "2",
                        "class" : "Virginica"
                    }
                ]
            },
            {
                "name" : "5",
                "variable" : "Sepal Width",
                "splitVal" : 3.4,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "6",
                        "variable" : "Petal Width",
                        "splitVal" : 1.7,
                        "parent" : "5",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "7",
                                "variable" : "Petal Length",
                                "splitVal" : 4.8,
                                "parent" : "6",
                                "class" : "null",
                                "children" : [
                                    {
                                        "name" : "8",
                                        "variable" : "null",
                                        "splitVal" : null,
                                        "parent": "7",
                                        "class" : "Versicolor"
                                    },
                                    {
                                        "name" : "9",
                                        "variable" : "null",
                                        "splitVal" : null,
                                        "parent": "7",
                                        "class" : "Versicolor"
                                    }
                                ]
                            },
                            {
                                "name" : "10",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "6",
                                "class" : "Virginica"
                            }
                        ]
                    },
                    {
                        "name" : "11",
                        "variable" : "null",
                        "splitVal" : null,
                        "parent": "5",
                        "class" : "Versicolor"
                    }
                ]
            }
        ]
    }
]

var tree15 = [
    {
        "name" : "1",
        "variable" : "Petal Length",
        "splitVal" : 1.9,
        "parent" : "null",
        "class" : "null",
        "children" : [
            {
                "name" : "2",
                "variable" : "null",
                "splitVal" : null,
                "parent": "1",
                "class" : "Setosa"
            },
            {
                "name" : "3",
                "variable" : "Petal Width",
                "splitVal" : 1.7,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "4",
                        "variable" : "Petal Length",
                        "splitVal" : 4.6,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "5",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Versicolor"
                            },
                            {
                                "name" : "6",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Versicolor"
                            }
                        ]
                    },
                    {
                        "name" : "7",
                        "variable" : "Petal Length",
                        "splitVal" : 4.9,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "8",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "7",
                                "class" : "Virginica"
                            },
                            {
                                "name" : "9",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "7",
                                "class" : "Virginica"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

var tree16 = [
    {
        "name" : "1",
        "variable" : "Petal Length",
        "splitVal" : 1.9,
        "parent" : "null",
        "class" : "null",
        "children" : [
            {
                "name" : "2",
                "variable" : "null",
                "splitVal" : null,
                "parent": "1",
                "class" : "Setosa"
            },
            {
                "name" : "3",
                "variable" : "Petal Width",
                "splitVal" : 1.5,
                "parent" : "1",
                "class" : "null",
                "children" : [
                    {
                        "name" : "4",
                        "variable" : "Petal Length",
                        "splitVal" : 4.5,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "5",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Versicolor"
                            },
                            {
                                "name" : "6",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "4",
                                "class" : "Versicolor"
                            }
                        ]
                    },
                    {
                        "name" : "7",
                        "variable" : "Petal Length",
                        "splitVal" : 5,
                        "parent" : "3",
                        "class" : "null",
                        "children" : [
                            {
                                "name" : "8",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "7",
                                "class" : "Virginica"
                            },
                            {
                                "name" : "9",
                                "variable" : "null",
                                "splitVal" : null,
                                "parent": "7",
                                "class" : "Virginica"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

var allTrees = [tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8, tree9, tree10, tree11, tree12, tree13, tree14, tree15, tree16]
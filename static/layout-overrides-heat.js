// BEAM LAB 版面调试保存的配置（由「版面调试」窗口自动生成，2026-10-25 16:31:46）
// 放在 static 文件夹里，teacher.html 和 student.html 会自动读取。
// "wide" "medium" "narrow" 是教师版（按宽度分档），"phone" 是学生页的手机版面。
// 想恢复默认版面：把 "regimes" 后面的内容改成 {}，或在版面调试里重置后再保存。
// "pageMapHeat": 5 表示页号已按 2026-10-20 的步骤编排（A1-0～A1-4、A2-0～A2-4）；小于 5 或没有这一项的旧文件，打开时自动改到新页号。
// "votes" 是 E 投票反馈页的人数（agree = A、doubt = B、unsure = C），在版面调试里选中「人数方块」可以改。
// "transfer" 是 M 页「学生回答」：B、C 的人数（A = 第一次投票的总人数 − B − C）和每位同学的想法，在版面调试里选中 M 页右栏可以改。
// "comments" 是 E 投票反馈页的匿名补充观点（一条一句），在版面调试里选中「匿名观点区」可以改。
// "canvas" 是教师版各页画布的大小，手机照搬教师版时用；保存时自动量，不用改。
window.BEAM_LAYOUT_OVERRIDES = {
  "canvas": {
    "pages": {
      "A1-0": [
        1834.8,
        759.5
      ],
      "A1-1": [
        1834.8,
        759.5
      ],
      "A1-2": [
        1834.8,
        759.5
      ],
      "A1-3": [
        1834.8,
        759.5
      ],
      "A2-3": [
        1460,
        759.5
      ],
      "A2-4": [
        1460,
        759.5
      ]
    },
    "width": 1844
  },
  "comments": [
    "没有荷载，就是没有力吧。",
    "温度和荷载有点像，又不太像。",
    "只靠平衡判断不了。"
  ],
  "pageMapHeat": 5,
  "regimes": {
    "phone": {
      "A1-0": {
        "captionTop": {
          "kind": "abstext",
          "label": "上方图注",
          "props": {
            "kh": 123.7209,
            "kw": 95.3488,
            "lvw": 4.4889,
            "tvw": 3.377
          },
          "sel": "#app .force-free-canvas > .structure-caption.top-caption"
        },
        "slot:originalStructure": {
          "kind": "abs",
          "label": "02 原结构图",
          "props": {
            "kh": 36.2791,
            "kw": 95.3488,
            "tvw": 12.6671
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"originalStructure\"]"
        }
      },
      "A1-1": {
        "captionTop": {
          "kind": "abstext",
          "label": "上方图注",
          "props": {
            "kh": 115.814,
            "kw": 95.3488,
            "lvw": 4.229,
            "tvw": 3.6627
          },
          "sel": "#app .force-free-canvas > .structure-caption.top-caption"
        },
        "slot:conceptOriginal": {
          "kind": "abs",
          "label": "03 圆一：原约束",
          "props": {
            "kh": 115.814,
            "kw": 95.3488,
            "lvw": 61.4966,
            "tvw": 21.1868
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptOriginal\"]"
        },
        "slot:conceptRedundant": {
          "kind": "abs",
          "label": "05 圆三：力代约束",
          "props": {
            "kh": 115.814,
            "kw": 95.3488,
            "lvw": 62.2762,
            "tvw": 45.3745
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptRedundant\"]"
        },
        "slot:conceptReleased": {
          "kind": "abs",
          "label": "04 圆二：解除约束",
          "props": {
            "kh": 115.814,
            "kw": 95.3488,
            "lvw": 73.7918,
            "tvw": 33.1462
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptReleased\"]"
        },
        "slot:originalStructure": {
          "kind": "abs",
          "label": "02 原结构图",
          "props": {
            "kh": 115.814,
            "kw": 95.3488,
            "lvw": 22.6165,
            "tvw": 16.3136
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"originalStructure\"]"
        }
      },
      "A1-2": {
        "arrow": {
          "kind": "arrow",
          "label": "过渡箭头",
          "props": {
            "kh": 123.7209,
            "kw": 95.3488,
            "lvw": 40.746,
            "tvw": 45.6859
          },
          "sel": "#app .force-free-canvas > .force-transition-arrow"
        },
        "slot:basicStructure": {
          "kind": "abs",
          "label": "07 基本体系图",
          "props": {
            "kh": 123.7209,
            "kw": 95.3488,
            "lvw": 21.0062,
            "tvw": 70.1058
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"basicStructure\"]"
        },
        "slot:conceptOriginal": {
          "kind": "abs",
          "label": "03 圆一：原约束",
          "props": {
            "kh": 123.7209,
            "kw": 95.3488,
            "lvw": 60.7169,
            "tvw": 29.5235
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptOriginal\"]"
        },
        "slot:conceptRedundant": {
          "kind": "abs",
          "label": "05 圆三：力代约束",
          "props": {
            "kh": 123.7209,
            "kw": 95.3488,
            "lvw": 59.9372,
            "tvw": 58.224
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptRedundant\"]"
        },
        "slot:conceptReleased": {
          "kind": "abs",
          "label": "04 圆二：解除约束",
          "props": {
            "kh": 123.7209,
            "kw": 95.3488,
            "lvw": 73.0121,
            "tvw": 42.947
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptReleased\"]"
        },
        "slot:originalStructure": {
          "kind": "abs",
          "label": "02 原结构图",
          "props": {
            "kh": 123.7209,
            "kw": 95.3488,
            "lvw": 21.0571,
            "tvw": 26.0624
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"originalStructure\"]"
        }
      },
      "A1-3": {
        "arrow": {
          "kind": "arrow",
          "label": "过渡箭头",
          "props": {
            "kh": 123.7209,
            "kw": 95.3488,
            "lvw": 40.746,
            "tvw": 45.6859
          },
          "sel": "#app .force-free-canvas > .force-transition-arrow"
        },
        "slot:basicStructure": {
          "kind": "abs",
          "label": "07 基本体系图",
          "props": {
            "kh": 123.7209,
            "kw": 95.3488,
            "lvw": 21.0062,
            "tvw": 70.1058
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"basicStructure\"]"
        },
        "slot:conceptOriginal": {
          "kind": "abs",
          "label": "03 圆一：原约束",
          "props": {
            "kh": 123.7209,
            "kw": 95.3488,
            "lvw": 60.7169,
            "tvw": 29.5235
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptOriginal\"]"
        },
        "slot:conceptRedundant": {
          "kind": "abs",
          "label": "05 圆三：力代约束",
          "props": {
            "kh": 123.7209,
            "kw": 95.3488,
            "lvw": 59.9372,
            "tvw": 58.224
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptRedundant\"]"
        },
        "slot:conceptReleased": {
          "kind": "abs",
          "label": "04 圆二：解除约束",
          "props": {
            "kh": 123.7209,
            "kw": 95.3488,
            "lvw": 73.0121,
            "tvw": 42.947
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptReleased\"]"
        },
        "slot:originalStructure": {
          "kind": "abs",
          "label": "02 原结构图",
          "props": {
            "kh": 123.7209,
            "kw": 95.3488,
            "lvw": 21.0571,
            "tvw": 26.0624
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"originalStructure\"]"
        }
      },
      "A2-2": {
        "label:basicFyB": {
          "kind": "label",
          "label": "下方 FyB 数值",
          "props": {
            "dx": -36,
            "dy": 0
          },
          "sel": "#app [data-force-label-slot=\"basicFyB\"]"
        }
      },
      "A2-3": {
        "formula": {
          "kind": "abstext",
          "label": "位移公式",
          "props": {
            "kh": 80.6977,
            "kw": 95.3488,
            "lvw": 51.4627,
            "tvw": 65.3606
          },
          "sel": "#app .force-free-canvas > .deformation-formula-label"
        },
        "label:basicFyB": {
          "kind": "label",
          "label": "下方 FyB 数值",
          "props": {
            "dx": -21,
            "dy": 0
          },
          "sel": "#app [data-force-label-slot=\"basicFyB\"]"
        }
      },
      "A2-4": {
        "formula": {
          "kind": "abstext",
          "label": "位移公式",
          "props": {
            "kh": 80.6977,
            "kw": 95.3488,
            "lvw": 38.4334,
            "text": 150,
            "tvw": 68.3284
          },
          "sel": "#app .force-free-canvas > .deformation-formula-label"
        }
      },
      "ALL": {
        "controlCard": {
          "kind": "panel",
          "label": "滑块卡片",
          "props": {
            "hpx": 266,
            "wpx": 408
          },
          "sel": "#app .force-control"
        },
        "controls": {
          "kind": "group",
          "label": "右侧控制栏",
          "props": {
            "dx": 0,
            "dy": -20
          },
          "sel": "#app .force-controls"
        },
        "main": {
          "kind": "main",
          "label": "页面主体",
          "props": {
            "hpx": 819
          },
          "sel": "#app"
        },
        "readouts": {
          "kind": "group",
          "label": "读数区",
          "props": {
            "text": 75
          },
          "sel": "#app .force-control .readouts"
        }
      },
      "G:A2": {
        "canvas": {
          "kind": "canvas",
          "label": "画布白框",
          "props": {
            "ar": 1.18
          },
          "sel": "#app .force-free-canvas"
        },
        "divider": {
          "kind": "bar",
          "label": "上下分隔线",
          "props": {
            "kh": 80.6977,
            "kw": 95.3488,
            "tvw": 38.3614
          },
          "sel": "#app .force-free-canvas > .deformation-row-divider"
        },
        "label:originalFyB": {
          "kind": "label",
          "label": "上方 FyB 数值",
          "props": {
            "dx": -48,
            "dy": 36
          },
          "sel": "#app [data-force-label-slot=\"originalFyB\"]"
        },
        "label:originalMA": {
          "kind": "label",
          "label": "上方 MA 数值",
          "props": {
            "dx": 0,
            "dy": -10
          },
          "sel": "#app [data-force-label-slot=\"originalMA\"]"
        },
        "momentTitleBottom": {
          "kind": "abstext",
          "label": "下方「弯矩图」小标题",
          "props": {
            "kh": 9.0698,
            "kw": 31.1628,
            "lvw": -2.3584,
            "tvw": 21.5516
          },
          "sel": "#app [data-element-slot=\"basicMomentBg\"] > .moment-diagram-title"
        },
        "momentTitleTop": {
          "kind": "abstext",
          "label": "上方「弯矩图」小标题",
          "props": {
            "kh": 11.8605,
            "kw": 31.1628,
            "lvw": -2.3618,
            "tvw": 14.8948
          },
          "sel": "#app [data-element-slot=\"originalMomentBg\"] > .moment-diagram-title"
        },
        "slot:originalMomentBg": {
          "kind": "abs",
          "label": "08 上方弯矩图",
          "props": {
            "kh": 80.6977,
            "kw": 95.3488,
            "lvw": 6.0828,
            "tvw": 9.8654
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"originalMomentBg\"]"
        },
        "trendLabel": {
          "kind": "abstext",
          "label": "「变形趋势示意」",
          "props": {
            "kh": 14.6512,
            "kw": 31.6279,
            "lvw": -0.0514,
            "tvw": -4.1636
          },
          "sel": "#app .deformation-trend-label"
        }
      }
    },
    "wide": {
      "A1-0": {
        "label:originalFyB": {
          "kind": "label",
          "label": "上方 FyB 数值",
          "props": {
            "dx": 271,
            "dy": 163,
            "text": 300
          },
          "sel": "#app [data-force-label-slot=\"originalFyB\"]"
        },
        "slot:originalStructure": {
          "kind": "abs",
          "label": "02 原结构图",
          "props": {
            "kh": 40.1302,
            "kw": 99.4035,
            "lvw": 19.7499,
            "tvw": 4.979
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"originalStructure\"]"
        },
        "storyTitle": {
          "kind": "text",
          "label": "标题",
          "props": {},
          "sel": "#app .force-story > h1",
          "text": "继续分析未知的对象"
        }
      },
      "A1-1": {
        "label:originalFyB": {
          "kind": "label",
          "label": "上方 FyB 数值",
          "props": {
            "dx": 117,
            "dy": 83,
            "text": 200
          },
          "sel": "#app [data-force-label-slot=\"originalFyB\"]"
        },
        "slot:conceptOriginal": {
          "kind": "abs",
          "label": "03 圆一：原约束",
          "props": {
            "kh": 40.1302,
            "kw": 99.4035,
            "lvw": 54.3595
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptOriginal\"]"
        },
        "slot:conceptRedundant": {
          "kind": "abs",
          "label": "05 圆三：力代约束",
          "props": {
            "kh": 40.1302,
            "kw": 99.4035,
            "lvw": 54.3601
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptRedundant\"]"
        },
        "slot:originalStructure": {
          "kind": "abs",
          "label": "02 原结构图",
          "props": {
            "kh": 40.1302,
            "kw": 99.4035,
            "tvw": 1.9616
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"originalStructure\"]"
        },
        "storyTitle": {
          "kind": "text",
          "label": "标题",
          "props": {},
          "sel": "#app .force-story > h1",
          "text": "力法第1步：定基本结构"
        }
      },
      "A1-2": {
        "arrow": {
          "kind": "arrow",
          "label": "过渡箭头",
          "props": {
            "hvw": 4.9892,
            "kh": 40.1302,
            "kw": 99.4035,
            "lvw": 38.6874,
            "tvw": 17.4178
          },
          "sel": "#app .force-free-canvas > .force-transition-arrow"
        },
        "captionBottom": {
          "kind": "abstext",
          "label": "下方图注",
          "props": {
            "kh": 40.1302,
            "kw": 99.4035,
            "lvw": 1.8964,
            "text": 200,
            "tvw": 27.3957
          },
          "sel": "#app .force-free-canvas > .structure-caption.bottom-caption"
        },
        "label:basicFyB": {
          "kind": "label",
          "label": "下方 FyB 数值",
          "props": {
            "dx": 117,
            "dy": -33,
            "text": 200
          },
          "sel": "#app [data-force-label-slot=\"basicFyB\"]"
        },
        "label:originalFyB": {
          "kind": "label",
          "label": "上方 FyB 数值",
          "props": {
            "dx": 183,
            "dy": 100,
            "text": 200
          },
          "sel": "#app [data-force-label-slot=\"originalFyB\"]"
        },
        "slot:conceptOriginal": {
          "kind": "abs",
          "label": "03 圆一：原约束",
          "props": {
            "kh": 40.1302,
            "kw": 99.4035,
            "lvw": 54.3595
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptOriginal\"]"
        },
        "slot:conceptRedundant": {
          "kind": "abs",
          "label": "05 圆三：力代约束",
          "props": {
            "kh": 40.1302,
            "kw": 99.4035,
            "lvw": 54.3601
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptRedundant\"]"
        },
        "slot:originalStructure": {
          "kind": "abs",
          "label": "02 原结构图",
          "props": {
            "kh": 40.1302,
            "kw": 99.4035,
            "tvw": 1.9616
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"originalStructure\"]"
        },
        "storyTitle": {
          "kind": "text",
          "label": "标题",
          "props": {},
          "sel": "#app .force-story > h1",
          "text": "力法第1步：定基本结构"
        }
      },
      "A1-3": {
        "arrow": {
          "kind": "arrow",
          "label": "过渡箭头",
          "props": {
            "hvw": 4.9892,
            "kh": 40.1302,
            "kw": 99.4035,
            "lvw": 38.6874,
            "tvw": 17.4178
          },
          "sel": "#app .force-free-canvas > .force-transition-arrow"
        },
        "captionBottom": {
          "kind": "abstext",
          "label": "下方图注",
          "props": {
            "kh": 40.1302,
            "kw": 99.4035,
            "lvw": 1.8964,
            "text": 200,
            "tvw": 27.3957
          },
          "sel": "#app .force-free-canvas > .structure-caption.bottom-caption"
        },
        "label:basicFyB": {
          "kind": "label",
          "label": "下方 FyB 数值",
          "props": {
            "dx": 117,
            "dy": -33,
            "text": 200
          },
          "sel": "#app [data-force-label-slot=\"basicFyB\"]"
        },
        "label:originalFyB": {
          "kind": "label",
          "label": "上方 FyB 数值",
          "props": {
            "dx": 183,
            "dy": 100,
            "text": 200
          },
          "sel": "#app [data-force-label-slot=\"originalFyB\"]"
        },
        "slot:conceptOriginal": {
          "kind": "abs",
          "label": "03 圆一：原约束",
          "props": {
            "kh": 40.1302,
            "kw": 99.4035,
            "lvw": 54.3595
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptOriginal\"]"
        },
        "slot:conceptRedundant": {
          "kind": "abs",
          "label": "05 圆三：力代约束",
          "props": {
            "kh": 40.1302,
            "kw": 99.4035,
            "lvw": 54.3601
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptRedundant\"]"
        },
        "slot:originalStructure": {
          "kind": "abs",
          "label": "02 原结构图",
          "props": {
            "kh": 40.1302,
            "kw": 99.4035,
            "tvw": 1.9616
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"originalStructure\"]"
        },
        "storyTitle": {
          "kind": "text",
          "label": "标题",
          "props": {},
          "sel": "#app .force-story > h1",
          "text": "力法第2步：列力法方程"
        }
      },
      "A1-4": {
        "methodStripHeat": {
          "kind": "box",
          "label": "A1-4 顺序示意图",
          "props": {
            "frameInterval": 0.35
          },
          "sel": "#app [data-step-figure-heat=\"methodStrip\"]"
        },
        "storyTitle": {
          "kind": "text",
          "label": "标题",
          "props": {},
          "sel": "#app .force-story > h1",
          "text": "检查第二步：列力法方程"
        }
      },
      "A2-0": {
        "compareBottomStructureHeat": {
          "kind": "abs",
          "label": "对照·下排结构图（温度）",
          "props": {
            "kh": 41.0521,
            "kw": 79.0672,
            "tvw": 23.181
          },
          "sel": "#app .force-free-canvas > [data-compare-slot-heat=\"bottomStructure\"]"
        },
        "compareTopStructureHeat": {
          "kind": "abs",
          "label": "对照·上排结构图（荷载）",
          "props": {
            "kh": 42.841,
            "kw": 78.1551,
            "tvw": 4.3269
          },
          "sel": "#app .force-free-canvas > [data-compare-slot-heat=\"topStructure\"]"
        },
        "integrationArrowHeat": {
          "kind": "figureArrow",
          "label": "图乘引导箭头（直线／拐弯共用）",
          "props": {
            "color": 0,
            "formulaX": 710.6,
            "formulaY": 346.8
          },
          "sel": "#app [data-integration-arrow-heat]"
        },
        "storyTitle": {
          "kind": "text",
          "label": "标题",
          "props": {},
          "sel": "#app .force-story > h1",
          "text": "荷载作用"
        }
      },
      "A2-1": {
        "integrationArrowHeat": {
          "kind": "figureArrow",
          "label": "图乘引导箭头（直线／拐弯共用）",
          "props": {
            "color": 0,
            "formulaX": 710.6,
            "formulaY": 346.8
          },
          "sel": "#app [data-integration-arrow-heat]"
        },
        "pick:#app g:nth-child(6) > g:nth-child(2) > path:nth-child(2)": {
          "kind": "text",
          "label": "path",
          "props": {
            "color": 16639
          },
          "sel": "#app g:nth-child(6) > g:nth-child(2) > path:nth-child(2)"
        },
        "storyTitle": {
          "kind": "text",
          "label": "标题",
          "props": {},
          "sel": "#app .force-story > h1",
          "text": "温度变化"
        }
      },
      "A2-2": {
        "formula": {
          "kind": "abstext",
          "label": "位移公式",
          "props": {
            "kh": 40.1302,
            "kw": 79.0672,
            "lvw": 28.64,
            "text": 200,
            "tvw": 33.95
          },
          "sel": "#app .force-free-canvas > .deformation-formula-label"
        },
        "fybFormulaHeat": {
          "kind": "figureFormula",
          "label": "绿色 FyB 位移公式",
          "props": {
            "formulaScale": 120,
            "formulaX": 1136.5,
            "formulaY": 529.3
          },
          "sel": "#app [data-figure-formula-heat=\"fyb\"]"
        },
        "slot:basicMomentBg": {
          "kind": "abs",
          "label": "10 下方弯矩图",
          "props": {
            "kh": 42.841,
            "kw": 78.1551,
            "lvw": 5.2636
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"basicMomentBg\"]"
        },
        "slot:basicStructure": {
          "kind": "abs",
          "label": "07 基本体系图",
          "props": {
            "kh": 42.841,
            "kw": 78.1551,
            "lvw": 47.991,
            "tvw": 22.4936
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"basicStructure\"]"
        },
        "storyTitle": {
          "kind": "text",
          "label": "标题",
          "props": {},
          "sel": "#app .force-story > h1",
          "text": "回忆第四章：弯曲变形的两个来源"
        },
        "thermalFormulaHeat": {
          "kind": "figureFormula",
          "label": "紫色温度位移公式",
          "props": {
            "formulaScale": 112,
            "formulaX": 2954.3,
            "formulaY": 535
          },
          "sel": "#app [data-figure-formula-heat=\"thermal\"]"
        }
      },
      "A2-3": {
        "formula": {
          "kind": "abstext",
          "label": "位移公式",
          "props": {
            "kh": 40.1302,
            "kw": 79.0672,
            "lvw": 37.9338,
            "text": 200,
            "tvw": 33.9124
          },
          "sel": "#app .force-free-canvas > .deformation-formula-label"
        },
        "label:basicFyB": {
          "kind": "label",
          "label": "下方 FyB 数值",
          "props": {
            "dx": 150
          },
          "sel": "#app [data-force-label-slot=\"basicFyB\"]"
        },
        "label:originalFyB": {
          "kind": "label",
          "label": "上方 FyB 数值",
          "props": {
            "dx": 117
          },
          "sel": "#app [data-force-label-slot=\"originalFyB\"]"
        },
        "slot:basicStructure": {
          "kind": "abs",
          "label": "07 基本体系图",
          "props": {
            "kh": 41.0521,
            "kw": 79.0672,
            "lvw": 48.1028,
            "tvw": 23.8324,
            "wvw": 24.6204
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"basicStructure\"]"
        },
        "storyTitle": {
          "kind": "text",
          "label": "标题",
          "props": {},
          "sel": "#app .force-story > h1",
          "text": "将&ensp;温度位移公式&ensp;纳入力法方程"
        }
      },
      "A2-4": {
        "formula": {
          "kind": "abstext",
          "label": "位移公式",
          "props": {
            "kh": 40.1302,
            "kw": 79.0672,
            "lvw": 37.6898,
            "text": 200,
            "tvw": 33.9666
          },
          "sel": "#app .force-free-canvas > .deformation-formula-label"
        },
        "label:basicFyB": {
          "kind": "label",
          "label": "下方 FyB 数值",
          "props": {
            "dx": 133
          },
          "sel": "#app [data-force-label-slot=\"basicFyB\"]"
        },
        "label:originalFyB": {
          "kind": "label",
          "label": "上方 FyB 数值",
          "props": {
            "dx": 133
          },
          "sel": "#app [data-force-label-slot=\"originalFyB\"]"
        },
        "slot:basicStructure": {
          "kind": "abs",
          "label": "07 基本体系图",
          "props": {
            "kh": 42.841,
            "kw": 78.1551,
            "lvw": 48.1043,
            "tvw": 23.8514,
            "wvw": 24.6204
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"basicStructure\"]"
        },
        "storyTitle": {
          "kind": "text",
          "label": "标题",
          "props": {},
          "sel": "#app .force-story > h1",
          "text": "将&ensp;温度位移公式&ensp;纳入力法方程"
        },
        "zeroLabel": {
          "kind": "abstext",
          "label": "「ΔB = 0」",
          "props": {
            "kh": 15.3471,
            "kw": 34.3275,
            "lvw": 27.6039,
            "text": 200,
            "tvw": -0.7051
          },
          "sel": "#app .deformation-zero-label"
        }
      },
      "ALL": {
        "controlCard": {
          "kind": "panel",
          "label": "滑块卡片",
          "props": {
            "dy": 161
          },
          "sel": "#app .force-control"
        },
        "main": {
          "kind": "main",
          "label": "页面主体",
          "props": {
            "dy": 24,
            "hpx": 814
          },
          "sel": "#app"
        },
        "rangeRow": {
          "kind": "group",
          "label": "滑块行",
          "props": {
            "text": 150
          },
          "sel": "#app .force-control .range-row"
        }
      },
      "CONSOLE": {
        "c:entryText": {
          "kind": "text",
          "label": "入口说明",
          "props": {},
          "sel": "#teacherCockpit .entry-compact h2 + p",
          "text": "请扫描二维码进入虚拟实验室"
        },
        "c:focusBtn": {
          "kind": "box",
          "label": "「放大学生预览 / 返回控制台」",
          "props": {
            "dx": 490,
            "dy": 10,
            "text": 172
          },
          "sel": "#focusPreview"
        },
        "c:guards": {
          "kind": "guard",
          "label": "下方两个橙色护角",
          "props": {
            "gsize": 70
          },
          "sel": "body.beam-frame #teacherCockpit > .teacher-command-bar"
        },
        "c:main": {
          "kind": "main",
          "label": "控制台主体",
          "props": {
            "dy": 10,
            "hpx": 848
          },
          "sel": "#app"
        },
        "c:roadmap": {
          "kind": "group",
          "label": "阶段路线（00–03）",
          "props": {
            "dy": 3,
            "text": 160
          },
          "sel": "#teacherCockpit > .stage-roadmap"
        },
        "c:stageNav": {
          "kind": "group",
          "label": "按钮组",
          "props": {
            "dx": -34,
            "text": 150
          },
          "sel": "#teacherCockpit .stage-nav"
        },
        "c:stageTitle": {
          "kind": "text",
          "label": "阶段标题",
          "props": {
            "dx": -30,
            "text": 200
          },
          "sel": "#teacherStageTitle"
        },
        "c:tuneBtn": {
          "kind": "box",
          "label": "「版面调试」按钮",
          "props": {
            "dx": 398,
            "dy": 9
          },
          "sel": "#openLayoutEditor"
        }
      },
      "CONSOLE-OVERVIEW": {
        "c:entry": {
          "kind": "panel",
          "label": "学生入口面板",
          "props": {
            "wpx": 1224
          },
          "sel": "#teacherCockpit .entry-compact"
        },
        "c:entryButtons": {
          "kind": "group",
          "label": "复制 / 重置按钮",
          "props": {
            "text": 167
          },
          "sel": "#teacherCockpit .entry-compact .button-row"
        },
        "c:preview": {
          "kind": "panel",
          "label": "学生预览（整体）",
          "props": {
            "dx": 590,
            "wpx": 579
          },
          "sel": "#teacherCockpit .preview-panel"
        },
        "c:previewHead": {
          "kind": "group",
          "label": "「投屏演示视角」标签行",
          "props": {
            "hpx": 74,
            "text": 160
          },
          "sel": "#teacherCockpit .preview-heading"
        },
        "c:qr": {
          "kind": "circle",
          "label": "二维码",
          "props": {
            "size": 440
          },
          "sel": "#teacherCockpit .entry-compact .qr"
        },
        "c:roadSteps": {
          "kind": "box",
          "label": "路线格（全部）",
          "props": {
            "mt": -15
          },
          "sel": "#teacherCockpit .stage-roadmap > .roadmap-step"
        }
      },
      "E": {
        "leftTitle": {
          "kind": "text",
          "label": "左栏标题",
          "props": {},
          "sel": "#app .hero > article.panel > h1",
          "text": "平衡方程与温度变化无关，所以温度变化时超静定结构不产生内力，你同意吗?"
        },
        "pick:#app button[data-vote=\"agree\"] > span": {
          "kind": "text",
          "label": "span「三组都是」",
          "props": {},
          "sel": "#app button[data-vote=\"agree\"] > span",
          "text": "同意"
        },
        "pick:#app button[data-vote=\"doubt\"] > span": {
          "kind": "text",
          "label": "span「只有其中一组是」",
          "props": {},
          "sel": "#app button[data-vote=\"doubt\"] > span",
          "text": "不同意"
        },
        "pick:#app button[data-vote=\"unsure\"] > span": {
          "kind": "text",
          "label": "span「不一定在这三组里」",
          "props": {},
          "sel": "#app button[data-vote=\"unsure\"] > span",
          "text": "不确定"
        },
        "pick:#app div.candidate-heading > span:nth-child(2)": {
          "kind": "text",
          "label": "span「FxA = 0」",
          "props": {
            "dx": -274
          },
          "sel": "#app div.candidate-heading > span:nth-child(2)"
        },
        "pick:#app div.candidate-row:nth-child(2) > span:nth-child(1)": {
          "kind": "text",
          "label": "span「FyB = 0」",
          "props": {
            "dx": -15
          },
          "sel": "#app div.candidate-row:nth-child(2) > span:nth-child(1)"
        },
        "pick:#app div.candidate-row:nth-child(2) > span:nth-child(2)": {
          "kind": "text",
          "label": "span「FyA = 0」",
          "props": {
            "dx": -8
          },
          "sel": "#app div.candidate-row:nth-child(2) > span:nth-child(2)"
        },
        "pick:#app div.candidate-row:nth-child(4) > span:nth-child(1)": {
          "kind": "text",
          "label": "span「FyB = 1 kN」",
          "props": {
            "dx": -2
          },
          "sel": "#app div.candidate-row:nth-child(4) > span:nth-child(1)"
        },
        "pick:#app div.candidate-row:nth-child(4) > span:nth-child(2)": {
          "kind": "text",
          "label": "span「FyA = −1 kN」",
          "props": {
            "dx": -8
          },
          "sel": "#app div.candidate-row:nth-child(4) > span:nth-child(2)"
        },
        "pick:#app div.candidate-row:nth-child(4) > span:nth-child(3)": {
          "kind": "text",
          "label": "span「MA = −3 kN·m」",
          "props": {
            "dx": -24
          },
          "sel": "#app div.candidate-row:nth-child(4) > span:nth-child(3)"
        },
        "rightTitle": {
          "kind": "text",
          "label": "右栏标题",
          "props": {},
          "sel": "#app .hero > aside.panel > h2",
          "text": "静力平衡方程"
        }
      },
      "E-FB": {
        "fbComments": {
          "kind": "group",
          "label": "匿名观点区",
          "props": {
            "text": 100
          },
          "sel": "#app .student-feedback-comments"
        },
        "fbSummary": {
          "kind": "group",
          "label": "统计区",
          "props": {
            "mb": -81,
            "mt": 44
          },
          "sel": "#app .student-feedback-summary"
        },
        "leftPanel": {
          "kind": "panel",
          "label": "左栏面板",
          "props": {
            "wpx": 1512
          },
          "sel": "#app .hero > article.panel"
        },
        "rightLead": {
          "kind": "text",
          "label": "右栏说明文字",
          "props": {},
          "sel": "#app .hero > aside.panel > .lead",
          "text": "投票呈现的是同学们当前的理解与判断，下面进一步进行探索。"
        },
        "rightPanel": {
          "kind": "panel",
          "label": "右栏面板",
          "props": {
            "dx": 646,
            "wpx": 301
          },
          "sel": "#app .hero > aside.panel"
        }
      },
      "G:A1": {
        "arrowLabelLeftHeat": {
          "kind": "abstext",
          "label": "箭头左侧「内力等效」",
          "props": {
            "kh": 4.9892,
            "kw": 0.3254,
            "text": 150,
            "tvw": 3.0737
          },
          "sel": "#app [data-arrow-label-heat=\"left\"]"
        },
        "arrowLabelRightHeat": {
          "kind": "abstext",
          "label": "箭头右侧「变形协调」",
          "props": {
            "color": 2380954,
            "kh": 4.9892,
            "kw": 0.3254,
            "text": 150,
            "tvw": 3.0739
          },
          "sel": "#app [data-arrow-label-heat=\"right\"]"
        },
        "captionTop": {
          "kind": "abstext",
          "label": "上方图注",
          "props": {
            "kh": 40.1302,
            "kw": 99.4035,
            "lvw": 0.8897,
            "text": 200,
            "tvw": 5.0535
          },
          "sel": "#app .force-free-canvas > .structure-caption.top-caption"
        },
        "main": {
          "kind": "main",
          "label": "页面主体",
          "props": {
            "width": 99.5
          },
          "sel": "#app"
        },
        "slot:basicStructure": {
          "kind": "abs",
          "label": "07 基本体系图",
          "props": {
            "kh": 40.1302,
            "kw": 99.4035,
            "lvw": 17.2951,
            "tvw": 24.3052,
            "wvw": 32.2668
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"basicStructure\"]"
        },
        "slot:conceptOriginal": {
          "kind": "abs",
          "label": "03 圆一：原约束",
          "props": {
            "kh": 40.1302,
            "kw": 78.5792,
            "tvw": 1.399
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptOriginal\"]"
        },
        "slot:conceptRedundant": {
          "kind": "abs",
          "label": "05 圆三：力代约束",
          "props": {
            "kh": 40.1302,
            "kw": 78.5792,
            "lvw": 65.0978,
            "tvw": 26.5354
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptRedundant\"]"
        },
        "slot:conceptReleased": {
          "kind": "abs",
          "label": "04 圆二：解除约束",
          "props": {
            "kh": 40.1302,
            "kw": 78.5792,
            "lvw": 65.0976,
            "tvw": 13.9196
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"conceptReleased\"]"
        },
        "slot:originalStructure": {
          "kind": "abs",
          "label": "02 原结构图",
          "props": {
            "kh": 40.1302,
            "kw": 99.4035,
            "lvw": 17.3493,
            "tvw": 0.8787
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"originalStructure\"]"
        }
      },
      "G:A2": {
        "captionBottom": {
          "kind": "abstext",
          "label": "下方图注",
          "props": {
            "kh": 40.1302,
            "kw": 79.0672,
            "text": 200,
            "tvw": 19.3156
          },
          "sel": "#app .force-free-canvas > .structure-caption.bottom-caption"
        },
        "captionTop": {
          "kind": "abstext",
          "label": "上方图注",
          "props": {
            "kh": 40.1302,
            "kw": 79.0672,
            "text": 200,
            "tvw": 15.1938
          },
          "sel": "#app .force-free-canvas > .structure-caption.top-caption"
        },
        "divider": {
          "kind": "bar",
          "label": "上下分隔线",
          "props": {
            "kh": 40.1302,
            "kw": 79.0672,
            "tvw": 18.312
          },
          "sel": "#app .force-free-canvas > .deformation-row-divider"
        },
        "endpointLabel": {
          "kind": "label",
          "label": "端点「ΔB」标注",
          "props": {
            "dx": 4,
            "dy": -1,
            "text": 150
          },
          "sel": "#app .endpoint-label"
        },
        "focusMaskHeat": {
          "kind": "focusMask",
          "label": "A2-3／A2-4 聚焦公式的蒙版",
          "props": {
            "maskColor": 16777215,
            "maskOpacity": 90
          },
          "sel": "#app [data-focus-mask-heat]"
        },
        "label:basicFyB": {
          "kind": "label",
          "label": "下方 FyB 数值",
          "props": {
            "dx": 89,
            "text": 200
          },
          "sel": "#app [data-force-label-slot=\"basicFyB\"]"
        },
        "label:basicMA": {
          "kind": "label",
          "label": "下方 MA 数值",
          "props": {
            "text": 200
          },
          "sel": "#app [data-force-label-slot=\"basicMA\"]"
        },
        "label:originalFyB": {
          "kind": "label",
          "label": "上方 FyB 数值",
          "props": {
            "dx": 67,
            "dy": 83,
            "text": 200
          },
          "sel": "#app [data-force-label-slot=\"originalFyB\"]"
        },
        "label:originalMA": {
          "kind": "label",
          "label": "上方 MA 数值",
          "props": {
            "text": 200
          },
          "sel": "#app [data-force-label-slot=\"originalMA\"]"
        },
        "momentTitleBottom": {
          "kind": "abstext",
          "label": "下方「弯矩图」小标题",
          "props": {
            "text": 200
          },
          "sel": "#app [data-element-slot=\"basicMomentBg\"] > .moment-diagram-title"
        },
        "momentTitleTop": {
          "kind": "abstext",
          "label": "上方「弯矩图」小标题",
          "props": {
            "text": 200
          },
          "sel": "#app [data-element-slot=\"originalMomentBg\"] > .moment-diagram-title"
        },
        "slot:basicMomentBg": {
          "kind": "abs",
          "label": "10 下方弯矩图",
          "props": {
            "kh": 40.1302,
            "kw": 79.0672,
            "lvw": 5.0434,
            "tvw": 25.0639,
            "wvw": 25.7592
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"basicMomentBg\"]"
        },
        "slot:basicStructure": {
          "kind": "abs",
          "label": "07 基本体系图",
          "props": {
            "kh": 40.1302,
            "kw": 79.0672,
            "lvw": 49.4036,
            "tvw": 23.1658,
            "wvw": 26.1388
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"basicStructure\"]"
        },
        "slot:originalMomentBg": {
          "kind": "abs",
          "label": "08 上方弯矩图",
          "props": {
            "kh": 40.1302,
            "kw": 79.0672,
            "lvw": 5.0441,
            "tvw": 2.4505,
            "wvw": 25.7592
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"originalMomentBg\"]"
        },
        "slot:originalStructure": {
          "kind": "abs",
          "label": "02 原结构图",
          "props": {
            "kh": 40.1302,
            "kw": 78.2538,
            "lvw": 39.4795,
            "tvw": 2.5587,
            "wvw": 34.3275
          },
          "sel": "#app .force-free-canvas > [data-element-slot=\"originalStructure\"]"
        },
        "trendLabel": {
          "kind": "abstext",
          "label": "「变形趋势示意」",
          "props": {
            "kh": 12.2017,
            "kw": 26.1388,
            "lvw": 1.2524,
            "text": 150,
            "tvw": -0.6525
          },
          "sel": "#app .deformation-trend-label"
        }
      },
      "G:E": {
        "candidates": {
          "kind": "group",
          "label": "三组候选解",
          "props": {
            "dy": 36
          },
          "sel": "#app .candidate-solutions"
        },
        "equations": {
          "kind": "box",
          "label": "平衡方程框",
          "props": {
            "dy": 13
          },
          "sel": "#app .equilibrium-system"
        },
        "fbComments": {
          "kind": "group",
          "label": "匿名观点区",
          "props": {
            "dy": 115,
            "text": 117
          },
          "sel": "#app .student-feedback-comments"
        },
        "fbSummary": {
          "kind": "group",
          "label": "统计区",
          "props": {
            "hpx": 231,
            "text": 127
          },
          "sel": "#app .student-feedback-summary"
        },
        "fbTotal": {
          "kind": "box",
          "label": "人数方块",
          "props": {
            "text": 160
          },
          "sel": "#app .student-feedback-total"
        },
        "hero": {
          "kind": "hero",
          "label": "左右两栏",
          "props": {
            "hpx": 557
          },
          "sel": "#app > .hero"
        },
        "leftPanel": {
          "kind": "panel",
          "label": "左栏面板",
          "props": {
            "wpx": 1151
          },
          "sel": "#app .hero > article.panel"
        },
        "leftTitle": {
          "kind": "text",
          "label": "左栏标题",
          "props": {
            "text": 150
          },
          "sel": "#app .hero > article.panel > h1"
        },
        "main": {
          "kind": "main",
          "label": "页面主体",
          "props": {
            "hpx": 800,
            "width": 99.2
          },
          "sel": "#app"
        },
        "optionAll": {
          "kind": "box",
          "label": "三个选项按钮",
          "props": {
            "hpx": 157
          },
          "sel": "#app .options > .option"
        },
        "options": {
          "kind": "group",
          "label": "选项组",
          "props": {
            "hpx": 501,
            "text": 160
          },
          "sel": "#app .options"
        },
        "rightPanel": {
          "kind": "panel",
          "label": "右栏面板",
          "props": {
            "dx": 278,
            "wpx": 669
          },
          "sel": "#app .hero > aside.panel"
        },
        "rightTitle": {
          "kind": "text",
          "label": "右栏标题",
          "props": {
            "dx": -3,
            "dy": 5,
            "text": 140
          },
          "sel": "#app .hero > aside.panel > h2"
        },
        "submitRow": {
          "kind": "group",
          "label": "提交行",
          "props": {
            "text": 150
          },
          "sel": "#app .vote-submit-row"
        },
        "symbolNotes": {
          "kind": "group",
          "label": "符号说明",
          "props": {
            "dy": 41
          },
          "sel": "#app .symbol-notes"
        }
      },
      "M": {
        "pick:#app button[data-transfer-choice=\"B\"] > span > small": {
          "kind": "text",
          "label": "small「Δ1P = 0，计算 δ11」",
          "props": {},
          "sel": "#app button[data-transfer-choice=\"B\"] > span > small",
          "text": "<i>Δ</i><sub>1P</sub> = 0，计算 <i>δ</i><sub>11</sub> 和 <i>F</i><sub>yB</sub>"
        },
        "tfCount": {
          "kind": "box",
          "label": "M：人数（+1、+2）",
          "props": {
            "text": 75
          },
          "sel": "#app .transfer-count"
        },
        "tfTitle": {
          "kind": "text",
          "label": "M：题目",
          "props": {},
          "sel": "#app .transfer-head h1",
          "text": "梁截面宽度加倍，求解过程哪里需要修改？"
        }
      },
      "WAIT": {
        "waitEyebrow": {
          "kind": "text",
          "label": "小标题",
          "props": {
            "dy": 63,
            "text": 210
          },
          "sel": "#app .waiting .eyebrow",
          "text": "E—A 自主设计的AI虚拟实验室"
        },
        "waitLead": {
          "kind": "text",
          "label": "说明文字",
          "props": {
            "dx": -6,
            "dy": 80,
            "text": 126,
            "wpx": 769
          },
          "sel": "#app .waiting .lead"
        },
        "waitPulse": {
          "kind": "circle",
          "label": "B 圆标",
          "props": {
            "dy": 59,
            "size": 121,
            "text": 292
          },
          "sel": "#app .waiting .pulse"
        },
        "waitTitle": {
          "kind": "text",
          "label": "标题",
          "props": {
            "dy": 73,
            "text": 185
          },
          "sel": "#app .waiting h1"
        }
      }
    }
  },
  "savedAt": "2026-10-25 16:31:46",
  "transfer": {
    "B": 4,
    "C": 0,
    "scenario": "beam-width-double-heat",
    "texts": {
      "A": [],
      "B": [
        "更新 <i>EI</i>，重新计算。",
        "<i>δ</i><sub>11</sub> 减半。",
        "反力位移项减半，温度位移不变。",
        "2<i>F</i><sub>yB</sub> 改为 <i>F</i><sub>yB</sub>。"
      ],
      "C": []
    }
  },
  "version": 3,
  "votes": {
    "agree": 2,
    "doubt": 1,
    "unsure": 1
  }
};

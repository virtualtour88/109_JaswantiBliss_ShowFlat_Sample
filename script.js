TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "label": "Dining Area",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_t.jpg",
  "mapLocations": [
   {
    "y": 1151.57,
    "angle": -1.75,
    "class": "PanoramaMapLocation",
    "map": {
     "scaleMode": "fit_inside",
     "image": {
      "levels": [
       {
        "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B.jpeg",
        "class": "ImageResourceLevel",
        "height": 1257,
        "width": 1600
       },
       {
        "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_lq.jpeg",
        "class": "ImageResourceLevel",
        "height": 628,
        "grayscale": true,
        "width": 800
       }
      ],
      "class": "ImageResource"
     },
     "label": "WING-A_FLAT 03",
     "class": "Map",
     "thumbnailUrl": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_t.jpg",
     "fieldOfViewOverlayInsideColor": "#00FF00",
     "fieldOfViewOverlayInsideOpacity": 0.19,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "minimumZoomFactor": 1,
     "maximumZoomFactor": 1.79,
     "overlays": [
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_0.png",
           "class": "ImageResourceLevel",
           "height": 74,
           "width": 65
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 254.82,
        "height": 110,
        "y": 1096.57,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "toolTip": "Dining Area"
        }
       ],
       "id": "overlay_D48084BE_D8AE_24A7_41EB_05E85D00AD6E",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "class": "AreaHotspotMapOverlay",
       "map": {
        "height": 110,
        "y": 1096.59,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 37,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 254.83
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_1.png",
           "class": "ImageResourceLevel",
           "height": 74,
           "width": 65
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 411.91,
        "height": 110,
        "y": 709.78,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "toolTip": "Living Room"
        }
       ],
       "id": "overlay_D46C7DB8_D8AE_24AB_41CD_AB10DFFDCEBE",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "class": "AreaHotspotMapOverlay",
       "map": {
        "height": 110,
        "y": 709.85,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_1_map.gif",
           "class": "ImageResourceLevel",
           "height": 37,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 411.95
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_2.png",
           "class": "ImageResourceLevel",
           "height": 74,
           "width": 65
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 946.9,
        "height": 110,
        "y": 816.48,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "toolTip": "Kitchen"
        }
       ],
       "id": "overlay_D5EBEBFB_D8B2_2CAD_41D4_B6FD8F6EF9AA",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "class": "AreaHotspotMapOverlay",
       "map": {
        "height": 110,
        "y": 816.55,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_2_map.gif",
           "class": "ImageResourceLevel",
           "height": 37,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 946.94
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_3.png",
           "class": "ImageResourceLevel",
           "height": 74,
           "width": 65
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 826.78,
        "height": 110,
        "y": 1103.91,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)",
         "toolTip": "Bathroom"
        }
       ],
       "id": "overlay_D43A45BC_D8B2_64AB_41DE_C75D4EA78910",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "class": "AreaHotspotMapOverlay",
       "map": {
        "height": 110,
        "y": 1103.94,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_3_map.gif",
           "class": "ImageResourceLevel",
           "height": 37,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 826.82
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_4.png",
           "class": "ImageResourceLevel",
           "height": 74,
           "width": 65
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 1412.23,
        "height": 110,
        "y": 684.59,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "toolTip": "Bedroom"
        }
       ],
       "id": "overlay_D5CF774D_D8B2_25E5_41C1_0AA110D7DDEC",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "class": "AreaHotspotMapOverlay",
       "map": {
        "height": 110,
        "y": 684.64,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_4_map.gif",
           "class": "ImageResourceLevel",
           "height": 37,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 1412.23
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_5.png",
           "class": "ImageResourceLevel",
           "height": 74,
           "width": 65
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 1662.68,
        "height": 110,
        "y": 1065.38,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "toolTip": "M. Bedroom"
        }
       ],
       "id": "overlay_D4703D2B_D8B2_25AD_41E2_510B68AEB2A0",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "class": "AreaHotspotMapOverlay",
       "map": {
        "height": 110,
        "y": 1065.42,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_5_map.gif",
           "class": "ImageResourceLevel",
           "height": 37,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 1662.74
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_6.png",
           "class": "ImageResourceLevel",
           "height": 74,
           "width": 65
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 1397.34,
        "height": 110,
        "y": 1075.75,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "toolTip": "M. Bathroom"
        }
       ],
       "id": "overlay_D58B011D_D8B6_7D65_41D7_D5F88788DA46",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "class": "AreaHotspotMapOverlay",
       "map": {
        "height": 110,
        "y": 1075.81,
        "offsetX": 0,
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "image": {
         "levels": [
          {
           "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_6_map.gif",
           "class": "ImageResourceLevel",
           "height": 37,
           "width": 32
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 1397.41
       }
      }
     ],
     "initialZoomFactor": 1,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "fieldOfViewOverlayRadiusScale": 0.2,
     "width": 2351,
     "height": 1848,
     "id": "map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B"
    },
    "x": 302.82
   }
  ],
  "vfov": 180,
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 30,
           "width": 30
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.62,
        "yaw": -0.19,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.62
       }
      ],
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56, this.camera_D4D9A003_D8D6_FB5D_41E2_B3AD01ABB539); this.mainPlayList.set('selectedIndex', 1)",
        "toolTip": "Living Room"
       }
      ],
      "id": "overlay_D16A8DC6_D85E_24E4_41DF_A4EF97220BF3",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.62,
        "image": {
         "levels": [
          {
           "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 15,
           "width": 15
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -0.19,
        "hfov": 5.62
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true
     },
     {
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 30,
           "width": 30
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.62,
        "yaw": 55.31,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.62
       }
      ],
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DEB8885A_D852_6BEF_41CD_45757741B358, this.camera_D4D50013_D8D6_FB7D_41E0_5FC879B46D37); this.mainPlayList.set('selectedIndex', 2)",
        "toolTip": "Kitchen"
       }
      ],
      "id": "overlay_D25E6120_D85E_7D5B_41D2_7DE6BA04E9D3",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.62,
        "image": {
         "levels": [
          {
           "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 15,
           "width": 15
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 55.31,
        "hfov": 5.62
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true
     }
    ],
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 608,
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 608,
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "back": {
     "levels": [
      {
       "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 608,
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 608,
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 608,
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "left": {
     "levels": [
      {
       "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 608,
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_t.jpg"
   }
  ],
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "distance": 1,
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "label": "Living room",
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_t.jpg",
     "mapLocations": [
      {
       "y": 764.78,
       "angle": 0,
       "class": "PanoramaMapLocation",
       "map": "this.map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B",
       "x": 459.91
      }
     ],
     "vfov": 180,
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_0_HS_1_0.png",
              "class": "ImageResourceLevel",
              "height": 30,
              "width": 30
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -0.94,
           "yaw": -166.31,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.62
          }
         ],
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5, this.camera_D43BD07B_D8D6_FBAC_41E8_96CCBF006589); this.mainPlayList.set('selectedIndex', 0)",
           "toolTip": "Dining Area"
          }
         ],
         "id": "overlay_D248C9C0_D852_2CDB_41E8_A42ACC93419C",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -0.94,
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel",
              "height": 15,
              "width": 15
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -166.31,
           "hfov": 5.62
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true
        },
        {
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_0_HS_0_0.png",
              "class": "ImageResourceLevel",
              "height": 30,
              "width": 30
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 0.38,
           "yaw": 130.69,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.62
          }
         ],
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 2)",
           "toolTip": "Kitchen"
          }
         ],
         "id": "overlay_D2777D1E_D852_6564_41DA_802A747C24B3",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 0.38,
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel",
              "height": 15,
              "width": 15
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 130.69,
           "hfov": 5.62
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true
        }
       ],
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_d_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 608,
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "right": {
        "levels": [
         {
          "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_r_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 608,
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "back": {
        "levels": [
         {
          "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_b_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 608,
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_u_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 608,
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_f_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 608,
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "left": {
        "levels": [
         {
          "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_l_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 608,
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_t.jpg"
      }
     ],
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5",
       "yaw": -166.31,
       "backwardYaw": -180
      }
     ],
     "id": "panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56",
     "partial": false,
     "pitch": 0
    },
    "yaw": -0.19,
    "backwardYaw": -180
   },
   {
    "distance": 1,
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "label": "Kitchen",
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_t.jpg",
     "mapLocations": [
      {
       "y": 871.48,
       "angle": 0,
       "class": "PanoramaMapLocation",
       "map": "this.map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B",
       "x": 994.9
      }
     ],
     "vfov": 180,
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_0_HS_1_0.png",
              "class": "ImageResourceLevel",
              "height": 30,
              "width": 30
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 1.5,
           "yaw": -159.37,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.62
          }
         ],
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5, this.camera_D4C6404C_D8D6_FBE4_41B1_30E92F8F1CAD); this.mainPlayList.set('selectedIndex', 0)",
           "toolTip": "Dining Area"
          }
         ],
         "id": "overlay_D20A91B9_D852_3CAD_41E1_4E173E6F1E38",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 1.5,
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel",
              "height": 15,
              "width": 15
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -159.37,
           "hfov": 5.62
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true
        },
        {
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_0_HS_0_0.png",
              "class": "ImageResourceLevel",
              "height": 30,
              "width": 30
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 1.69,
           "yaw": 161.63,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.62
          }
         ],
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 3)",
           "toolTip": "Bedroom"
          }
         ],
         "id": "overlay_D20B468D_D87E_6764_41EA_2B31285DEEB5",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 1.69,
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel",
              "height": 15,
              "width": 15
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 161.63,
           "hfov": 5.62
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true
        },
        {
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_0_HS_2_0.png",
              "class": "ImageResourceLevel",
              "height": 30,
              "width": 30
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 1.13,
           "yaw": -175.12,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.62
          }
         ],
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE, this.camera_D4CA303C_D8D6_FBAB_41E9_BAF58CB4041F); this.mainPlayList.set('selectedIndex', 6)",
           "toolTip": "Bathroom"
          }
         ],
         "id": "overlay_D3010299_D8D2_1F6D_41A8_058D1B2D2C0C",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 1.13,
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel",
              "height": 15,
              "width": 15
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -175.12,
           "hfov": 5.62
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true
        }
       ],
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_d_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 608,
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "right": {
        "levels": [
         {
          "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_r_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 608,
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "back": {
        "levels": [
         {
          "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_b_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 608,
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_u_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 608,
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_f_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 608,
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "left": {
        "levels": [
         {
          "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_l_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 608,
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_t.jpg"
      }
     ],
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "label": "Bathroom",
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_t.jpg",
        "mapLocations": [
         {
          "y": 1158.91,
          "angle": 181.43,
          "class": "PanoramaMapLocation",
          "map": "this.map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B",
          "x": 874.78
         }
        ],
        "vfov": 180,
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_0_HS_0_0.png",
                 "class": "ImageResourceLevel",
                 "height": 30,
                 "width": 30
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -1.31,
              "yaw": 169.5,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.62
             }
            ],
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_DEB8885A_D852_6BEF_41CD_45757741B358, this.camera_D4C2A05B_D8D6_FBEC_41E1_1E427F0D16BD); this.mainPlayList.set('selectedIndex', 2)",
              "toolTip": "Kitchen"
             }
            ],
            "id": "overlay_D36E275F_D8D2_25E4_41B0_C03884631F78",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -1.31,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel",
                 "height": 15,
                 "width": 15
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 169.5,
              "hfov": 5.62
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true
           }
          ],
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_d_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 608,
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "right": {
           "levels": [
            {
             "url": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_r_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 608,
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "back": {
           "levels": [
            {
             "url": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_b_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 608,
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_u_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 608,
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_f_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 608,
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "left": {
           "levels": [
            {
             "url": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_l_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 608,
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_t.jpg"
         }
        ],
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "distance": 1,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_DEB8885A_D852_6BEF_41CD_45757741B358",
          "yaw": 169.5,
          "backwardYaw": -180
         }
        ],
        "id": "panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE",
        "partial": false,
        "pitch": 0
       },
       "yaw": -175.12,
       "backwardYaw": -180
      },
      {
       "distance": 1,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5",
       "yaw": -159.37,
       "backwardYaw": -180
      },
      {
       "distance": 1,
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "label": "Bedroom",
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_t.jpg",
        "mapLocations": [
         {
          "y": 739.59,
          "angle": 0,
          "class": "PanoramaMapLocation",
          "map": "this.map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B",
          "x": 1460.23
         }
        ],
        "vfov": 180,
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_0_HS_0_0.png",
                 "class": "ImageResourceLevel",
                 "height": 30,
                 "width": 30
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 0.38,
              "yaw": -158.44,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.62
             }
            ],
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E, this.camera_D43F106B_D8D6_FBAC_41E5_BE09CB18AEE4); this.mainPlayList.set('selectedIndex', 5)",
              "toolTip": "M. Bedroom"
             }
            ],
            "id": "overlay_D200B39B_D872_1D6D_419A_6DA7E10A13E5",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 0.38,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel",
                 "height": 15,
                 "width": 15
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -158.44,
              "hfov": 5.62
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true
           },
           {
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_0_HS_1_0.png",
                 "class": "ImageResourceLevel",
                 "height": 30,
                 "width": 30
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 0.56,
              "yaw": -148.87,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.62
             }
            ],
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 2)",
              "toolTip": "Kitchen"
             }
            ],
            "id": "overlay_CDE8A900_D85E_2D5B_41E1_D35A02BCBEA2",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 0.56,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel",
                 "height": 15,
                 "width": 15
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -148.87,
              "hfov": 5.62
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true
           }
          ],
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_d_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 608,
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "right": {
           "levels": [
            {
             "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_r_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 608,
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "back": {
           "levels": [
            {
             "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_b_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 608,
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_u_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 608,
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_f_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 608,
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "left": {
           "levels": [
            {
             "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_l_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 608,
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_t.jpg"
         }
        ],
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "distance": 1,
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 120,
           "label": "M. Bedroom",
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_t.jpg",
           "mapLocations": [
            {
             "y": 1120.38,
             "angle": 91.25,
             "class": "PanoramaMapLocation",
             "map": "this.map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B",
             "x": 1710.68
            }
           ],
           "vfov": 180,
           "hfov": 360,
           "frames": [
            {
             "overlays": [
              {
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_0_HS_1_0.png",
                    "class": "ImageResourceLevel",
                    "height": 30,
                    "width": 30
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -0.37,
                 "yaw": -157.5,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.62
                }
               ],
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1, this.camera_D4D1D022_D8D6_FB5F_41E2_65DB040E0A5E); this.mainPlayList.set('selectedIndex', 4)",
                 "toolTip": "M. Bathroom"
                }
               ],
               "id": "overlay_D2E4EA42_D876_2FDC_418C_3EE4558EF7D3",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -0.37,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel",
                    "height": 15,
                    "width": 15
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -157.5,
                 "hfov": 5.62
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true
              },
              {
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_0_HS_0_0.png",
                    "class": "ImageResourceLevel",
                    "height": 30,
                    "width": 30
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -0.37,
                 "yaw": -146.06,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.62
                }
               ],
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_D077E67A_D852_67AF_41E4_15431A436510, this.camera_D4CDF032_D8D6_FBBF_41D3_25FF9A88F82B); this.mainPlayList.set('selectedIndex', 3)",
                 "toolTip": "Bedroom"
                }
               ],
               "id": "overlay_D2F828FD_D876_2CA5_41E5_72BED49E3F14",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -0.37,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel",
                    "height": 15,
                    "width": 15
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -146.06,
                 "hfov": 5.62
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true
              }
             ],
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_d_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 608,
                "width": 608
               }
              ],
              "class": "ImageResource"
             },
             "right": {
              "levels": [
               {
                "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_r_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 608,
                "width": 608
               }
              ],
              "class": "ImageResource"
             },
             "back": {
              "levels": [
               {
                "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_b_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 608,
                "width": 608
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_u_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 608,
                "width": 608
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_f_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 608,
                "width": 608
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "left": {
              "levels": [
               {
                "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_l_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 608,
                "width": 608
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_t.jpg"
            }
           ],
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "distance": 1,
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 120,
              "label": "M. Bathroom",
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_t.jpg",
              "mapLocations": [
               {
                "y": 1130.75,
                "angle": 182.08,
                "class": "PanoramaMapLocation",
                "map": "this.map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B",
                "x": 1445.34
               }
              ],
              "vfov": 180,
              "hfov": 360,
              "frames": [
               {
                "overlays": [
                 {
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_0_HS_0_0.png",
                       "class": "ImageResourceLevel",
                       "height": 30,
                       "width": 30
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -2.25,
                    "yaw": -160.31,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.62
                   }
                  ],
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E, this.camera_D4DEAFF4_D8D6_E4BB_41E5_C07D352B847E); this.mainPlayList.set('selectedIndex', 5)",
                    "toolTip": "M. Bedroom"
                   }
                  ],
                  "id": "overlay_D2B45661_D876_27DD_41DB_14C5F5F722FE",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -2.25,
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel",
                       "height": 15,
                       "width": 15
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -160.31,
                    "hfov": 5.62
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true
                 }
                ],
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_d_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 608,
                   "width": 608
                  }
                 ],
                 "class": "ImageResource"
                },
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_r_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 608,
                   "width": 608
                  }
                 ],
                 "class": "ImageResource"
                },
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_b_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 608,
                   "width": 608
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_u_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 608,
                   "width": 608
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_f_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 608,
                   "width": 608
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_l_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 608,
                   "width": 608
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_t.jpg"
               }
              ],
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "distance": 1,
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E",
                "yaw": -160.31,
                "backwardYaw": -180
               }
              ],
              "id": "panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1",
              "partial": false,
              "pitch": 0
             },
             "yaw": -157.5,
             "backwardYaw": -180
            },
            {
             "distance": 1,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_D077E67A_D852_67AF_41E4_15431A436510",
             "yaw": -146.06,
             "backwardYaw": -180
            }
           ],
           "id": "panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E",
           "partial": false,
           "pitch": 0
          },
          "yaw": -158.44,
          "backwardYaw": -180
         },
         {
          "distance": 1,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_DEB8885A_D852_6BEF_41CD_45757741B358",
          "yaw": -148.87,
          "backwardYaw": -180
         }
        ],
        "id": "panorama_D077E67A_D852_67AF_41E4_15431A436510",
        "partial": false,
        "pitch": 0
       },
       "yaw": 161.63,
       "backwardYaw": -180
      }
     ],
     "id": "panorama_DEB8885A_D852_6BEF_41CD_45757741B358",
     "partial": false,
     "pitch": 0
    },
    "yaw": 55.31,
    "backwardYaw": -180
   }
  ],
  "id": "panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5",
  "partial": false,
  "pitch": 0
 },
 {
  "class": "PanoramaPlayer",
  "buttonMoveDown": {
   "transparencyActive": true,
   "paddingRight": 0,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "height": 32,
   "horizontalAlign": "center",
   "borderSize": 0,
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "minWidth": 0,
   "width": 32
  },
  "buttonMoveLeft": {
   "transparencyActive": true,
   "paddingRight": 0,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "height": 32,
   "horizontalAlign": "center",
   "borderSize": 0,
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "minWidth": 0,
   "width": 32
  },
  "mouseControlMode": "drag_acceleration",
  "buttonZoomOut": {
   "transparencyActive": true,
   "paddingRight": 0,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "height": 32,
   "horizontalAlign": "center",
   "borderSize": 0,
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "minWidth": 0,
   "width": 32
  },
  "preloadEnabled": false,
  "touchControlMode": "drag_acceleration",
  "buttonRestart": {
   "transparencyActive": true,
   "paddingRight": 0,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "height": 40,
   "horizontalAlign": "center",
   "borderSize": 0,
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "minWidth": 0,
   "width": 40
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPlayRight": {
   "transparencyActive": true,
   "paddingRight": 0,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "height": 40,
   "horizontalAlign": "center",
   "borderSize": 0,
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "minWidth": 0,
   "width": 40
  },
  "buttonPause": {
   "transparencyActive": true,
   "paddingRight": 0,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "toggle",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "height": 40,
   "horizontalAlign": "center",
   "borderSize": 0,
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "minWidth": 0,
   "width": 40
  },
  "buttonPlayLeft": {
   "transparencyActive": true,
   "paddingRight": 0,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "height": 40,
   "horizontalAlign": "center",
   "borderSize": 0,
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "minWidth": 0,
   "width": 40
  },
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "buttonZoomIn": {
   "transparencyActive": true,
   "paddingRight": 0,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "height": 32,
   "horizontalAlign": "center",
   "borderSize": 0,
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "minWidth": 0,
   "width": 32
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveUp": {
   "transparencyActive": true,
   "paddingRight": 0,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "height": 32,
   "horizontalAlign": "center",
   "borderSize": 0,
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "minWidth": 0,
   "width": 32
  },
  "buttonMoveRight": {
   "transparencyActive": true,
   "paddingRight": 0,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "height": 32,
   "horizontalAlign": "center",
   "borderSize": 0,
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "minWidth": 0,
   "width": 32
  }
 },
 {
  "buttonZoomIn": "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
  "id": "MapViewerMapPlayer",
  "viewerArea": "this.MapViewer",
  "class": "MapPlayer",
  "buttonZoomOut": "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
  "movementMode": "constrained"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_CDC99636_D8BE_67A7_41CE_826699182355"
  },
  "id": "panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "class": "PanoramaCamera",
  "timeToIdle": 2000,
  "automaticZoomSpeed": 10,
  "idleSequence": "this.sequence_CDC99636_D8BE_67A7_41CE_826699182355"
 },
 "this.panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_DEB8885A_D852_6BEF_41CD_45757741B358",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_DEB8885A_D852_6BEF_41CD_45757741B358_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_D077E67A_D852_67AF_41E4_15431A436510",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_D077E67A_D852_67AF_41E4_15431A436510_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "media": "this.panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D4ED16EB_DC17_BA38_41E1_DB82A2E897B0, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_D4ED16EB_DC17_BA38_41E1_DB82A2E897B0",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D4E8F6ED_DC17_BA38_41D4_D06EECC8A7B5, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_D4E8F6ED_DC17_BA38_41D4_D06EECC8A7B5",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_DEB8885A_D852_6BEF_41CD_45757741B358",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D4E836EE_DC17_BA38_41D3_9D8E6E9B5202, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_D4E836EE_DC17_BA38_41D3_9D8E6E9B5202",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_DEB8885A_D852_6BEF_41CD_45757741B358_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_D077E67A_D852_67AF_41E4_15431A436510",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D4E846EE_DC17_BA38_41D8_C47F663F0F8F, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_D4E846EE_DC17_BA38_41D8_C47F663F0F8F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_D077E67A_D852_67AF_41E4_15431A436510_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D4E986EE_DC17_BA38_41D2_C482F2E6FF2B, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_D4E986EE_DC17_BA38_41D2_C482F2E6FF2B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D4E9D6EF_DC17_BA38_41E2_DB3D915FE864, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_D4E9D6EF_DC17_BA38_41E2_DB3D915FE864",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_D4E916EF_DC17_BA38_41D1_253B5335C536, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_D4E916EF_DC17_BA38_41D1_253B5335C536",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
    "camera": "this.panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B",
 {
  "class": "PlayList",
  "id": "playList_D4EC36E7_DC17_BA28_41E4_672A2B4549C3",
  "items": [
   {
    "media": "this.map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B",
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "id": "audio_CF5DFFE3_D852_64DD_41CE_45DEC2DB8B0C",
  "audio": {
   "oggUrl": "media/audio_CF5DFFE3_D852_64DD_41CE_45DEC2DB8B0C.ogg",
   "mp3Url": "media/audio_CF5DFFE3_D852_64DD_41CE_45DEC2DB8B0C.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio",
  "autoplay": true
 }
], "children": [
 {
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "top": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowColor": "#333333",
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "toolTipFontFamily": "Arial",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 4,
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBorderRadius": 0,
  "toolTipOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 10,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "playbackBarBorderSize": 2,
  "paddingBottom": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowSpread": 0,
  "height": "100%",
  "toolTipBackgroundColor": "#F6F6F6",
  "borderSize": 0,
  "playbackBarHeadHeight": 30,
  "toolTipPaddingRight": 6,
  "toolTipShadowBlurRadius": 3,
  "id": "MainViewer",
  "minWidth": 100,
  "paddingRight": 0,
  "progressOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "progressRight": 10,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadow": true,
  "minHeight": 50,
  "playbackBarHeadBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontColor": "#606060",
  "progressBackgroundOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "width": "100%",
  "progressBarOpacity": 1,
  "playbackBarBottom": 10,
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#AAAAAA",
  "progressBottom": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressHeight": 20,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBorderSize": 2,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipFontStyle": "normal",
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "left": 0,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeight": 20,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "playbackBarRight": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "toolTipTextShadowColor": "#000000",
  "class": "ViewerArea",
  "progressBarBorderRadius": 4
 },
 {
  "scrollBarColor": "#000000",
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "minHeight": 1,
  "bottom": "0%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "children": [
     "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
     "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
     "this.IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
     "this.IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
     {
      "scrollBarColor": "#000000",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "minHeight": 20,
      "children": [
       "this.IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
       "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
       "this.IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA"
      ],
      "paddingLeft": 0,
      "contentOpaque": false,
      "borderRadius": 0,
      "shadow": false,
      "height": "100%",
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver",
      "paddingTop": 0,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "overflow": "hidden",
      "gap": 4,
      "horizontalAlign": "center",
      "borderSize": 0,
      "class": "Container",
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "minWidth": 20,
      "layout": "vertical",
      "width": 40
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "transparencyActive": true,
      "paddingRight": 0,
      "minHeight": 0,
      "paddingLeft": 0,
      "borderRadius": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "mode": "toggle",
      "paddingTop": 0,
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "cursor": "hand",
      "height": 40,
      "horizontalAlign": "center",
      "borderSize": 0,
      "class": "IconButton",
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "minWidth": 0,
      "width": 40
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "contentOpaque": false,
    "verticalAlign": "middle",
    "height": "95.07%",
    "scrollBarVisible": "rollOver",
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "overflow": "hidden",
    "gap": 4,
    "horizontalAlign": "center",
    "borderSize": 0,
    "class": "Container",
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "minWidth": 360,
    "layout": "horizontal",
    "width": 360
   }
  ],
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingLeft": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "left": "0%",
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "overflow": "scroll",
  "gap": 10,
  "height": 142,
  "horizontalAlign": "center",
  "borderSize": 0,
  "class": "Container",
  "minWidth": 1,
  "layout": "horizontal",
  "paddingRight": 0
 },
 {
  "class": "ViewerArea",
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "toolTipShadowColor": "#333333",
  "bottom": "1.18%",
  "toolTipTextShadowOpacity": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "shadow": false,
  "toolTipFontFamily": "Arial",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 4,
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBorderRadius": 0,
  "toolTipOpacity": 1,
  "progressLeft": 10,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "playbackBarBorderSize": 2,
  "paddingBottom": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipPaddingRight": 6,
  "toolTipShadowSpread": 0,
  "height": "32.786%",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "borderSize": 0,
  "playbackBarHeadHeight": 30,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "id": "MapViewer",
  "minWidth": 1,
  "paddingRight": 0,
  "progressOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "progressRight": 10,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadow": true,
  "minHeight": 1,
  "playbackBarHeadBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontColor": "#606060",
  "progressBackgroundOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "width": "27.686%",
  "progressBarOpacity": 1,
  "playbackBarBottom": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#AAAAAA",
  "progressBottom": 2,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressHeight": 20,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBorderSize": 2,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipFontStyle": "normal",
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeight": 20,
  "right": "1.27%",
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarRight": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderColor": "#AAAAAA",
  "progressBarBorderRadius": 4
 }
], 
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "paddingRight": 0,
 "width": "100%",
 "start": "this.playAudioList([this.audio_CF5DFFE3_D852_64DD_41CE_45DEC2DB8B0C]); this.mainPlayList.set('selectedIndex', 0); this.playList_D4EC36E7_DC17_BA28_41E4_672A2B4549C3.set('selectedIndex', 0)",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "minWidth": 20,
 "scripts": {
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "registerKey": function(key, value){    window[key] = value; },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "getKey": function(key){    return window[key]; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "existsKey": function(key){    return key in window; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "unregisterKey": function(key){    delete window[key]; },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; }
 },
 "paddingLeft": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "shadow": false,
 "height": "100%",
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "overflow": "visible",
 "gap": 10,
 "borderSize": 0,
 "mouseWheelEnabled": true,
 "class": "Player",
 "id": "rootPlayer",
 "layout": "absolute"
})
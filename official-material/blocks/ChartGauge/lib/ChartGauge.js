import _Object$defineProperty from 'babel-runtime/core-js/object/define-property';
import _Object$setPrototypeOf from 'babel-runtime/core-js/object/set-prototype-of';
import _Object$create from 'babel-runtime/core-js/object/create';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _Object$defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = _Object$create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint no-mixed-operators: 0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Chart, Geom, Axis, Coord, Guide, Shape } from 'bizcharts';

var ChartGauge = (_temp = _class = function (_Component) {
  _inherits(ChartGauge, _Component);

  function ChartGauge(props) {
    _classCallCheck(this, ChartGauge);

    var _this = _possibleConstructorReturn(this, (ChartGauge.__proto__ || _Object$getPrototypeOf(ChartGauge)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(ChartGauge, [{
    key: 'render',
    value: function render() {
      // 参考：https://alibaba.github.io/BizCharts/
      var Arc = Guide.Arc,
          Html = Guide.Html,
          Line = Guide.Line;
      // 自定义Shape 部分

      Shape.registerShape('point', 'pointer', {
        drawShape: function drawShape(cfg, group) {
          var point = cfg.points[0]; // 获取第一个标记点
          point = this.parsePoint(point);
          var center = this.parsePoint({
            // 获取极坐标系下画布中心点
            x: 0,
            y: 0
          });
          // 绘制指针
          group.addShape('line', {
            attrs: {
              x1: center.x,
              y1: center.y,
              x2: point.x,
              y2: point.y - 20,
              stroke: cfg.color,
              lineWidth: 5,
              lineCap: 'round'
            }
          });
          return group.addShape('circle', {
            attrs: {
              x: center.x,
              y: center.y,
              r: 12,
              stroke: cfg.color,
              lineWidth: 4.5,
              fill: '#fff'
            }
          });
        }
      });

      var data = [{ value: 6 }];
      var cols = {
        value: {
          min: 0,
          max: 9,
          ticks: [2.25, 3.75, 5.25, 6.75],
          nice: false
        }
      };
      return React.createElement(
        'div',
        { className: 'chart-gauge' },
        React.createElement(
          IceContainer,
          null,
          React.createElement(
            'h4',
            { style: styles.title },
            '\u4EEA\u8868\u56FE'
          ),
          React.createElement(
            Chart,
            {
              height: 400,
              data: data,
              scale: cols,
              padding: [0, 0, 200, 0],
              forceFit: true
            },
            React.createElement(Coord, {
              type: 'polar',
              startAngle: -9 / 8 * Math.PI,
              endAngle: 1 / 8 * Math.PI,
              radius: 0.75
            }),
            React.createElement(Axis, {
              name: 'value',
              zIndex: 2,
              label: {
                offset: -20,
                formatter: function formatter(val) {
                  if (val === '2.25') {
                    return '差';
                  } else if (val === '3.75') {
                    return '中';
                  } else if (val === '5.25') {
                    return '良';
                  }

                  return '优';
                },
                textStyle: {
                  fontSize: 24,
                  fill: 'rgba(0, 0, 0, 0.65)',
                  textAlign: 'center'
                }
              }
            }),
            React.createElement(
              Guide,
              null,
              React.createElement(Line, {
                start: [3, 0.905],
                end: [3.0035, 0.85],
                lineStyle: {
                  stroke: '#19AFFA', // 线的颜色
                  lineDash: null, // 虚线的设置
                  lineWidth: 3
                }
              }),
              React.createElement(Line, {
                start: [4.5, 0.905],
                end: [4.5, 0.85],
                lineStyle: {
                  stroke: '#19AFFA', // 线的颜色
                  lineDash: null, // 虚线的设置
                  lineWidth: 3
                }
              }),
              React.createElement(Line, {
                start: [6, 0.905],
                end: [6.0035, 0.85],
                lineStyle: {
                  stroke: '#19AFFA', // 线的颜色
                  lineDash: null, // 虚线的设置
                  lineWidth: 3
                }
              }),
              React.createElement(Arc, {
                zIndex: 0,
                start: [0, 0.965],
                end: [9, 0.965],
                style: {
                  // 底灰色
                  stroke: '#000',
                  lineWidth: 18,
                  opacity: 0.09
                }
              }),
              React.createElement(Arc, {
                zIndex: 1,
                start: [0, 0.965],
                end: [data[0].value, 0.965],
                style: {
                  // 底灰色
                  stroke: '#1890FF',
                  lineWidth: 18
                }
              }),
              React.createElement(Html, {
                position: ['50%', '95%'],
                html: function html() {
                  return '<div style="width: 300px;text-align: center;font-size: 12px!important;"><p style="font-size: 1.75em; color: rgba(0,0,0,0.43);">\u5408\u683C\u7387</p><p style="font-size: 3em;color: rgba(0,0,0,0.85);">' + data[0].value * 10 + '%</p></div>';
                }
              })
            ),
            React.createElement(Geom, {
              type: 'point',
              position: 'value*1',
              shape: 'pointer',
              color: '#1890FF',
              active: false,
              style: { stroke: '#fff', lineWidth: 1 }
            })
          )
        )
      );
    }
  }]);

  return ChartGauge;
}(Component), _class.displayName = 'ChartGauge', _class.propTypes = {}, _class.defaultProps = {}, _temp);
export { ChartGauge as default };


var styles = {
  title: {
    margin: '0 0 40px',
    fontSize: '18px',
    paddingBottom: '15px',
    fontWeight: 'bold',
    borderBottom: '1px solid #eee'
  }
};
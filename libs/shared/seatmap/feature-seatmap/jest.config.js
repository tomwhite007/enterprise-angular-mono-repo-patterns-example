module.exports = {
  name: 'shared-seatmap-feature-seatmap',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/seatmap/feature-seatmap',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
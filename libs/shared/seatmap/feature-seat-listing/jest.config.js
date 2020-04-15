module.exports = {
  name: 'shared-seatmap-feature-seat-listing',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/shared/seatmap/feature-seat-listing',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

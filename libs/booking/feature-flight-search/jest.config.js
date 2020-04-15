module.exports = {
  name: 'booking-feature-flight-search',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/feature-flight-search',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

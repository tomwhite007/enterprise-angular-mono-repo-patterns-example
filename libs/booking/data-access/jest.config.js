module.exports = {
  name: 'booking-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/data-access',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

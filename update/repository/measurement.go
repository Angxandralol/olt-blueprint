package repository

import (
	"context"

	"github.com/metalpoch/olt-blueprint/update/constants"
	"github.com/metalpoch/olt-blueprint/update/entity"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type measurementRepository struct {
	db *gorm.DB
}

func NewMeasurementRepository(db *gorm.DB) *measurementRepository {
	return &measurementRepository{db}
}

func (repo measurementRepository) Get(ctx context.Context, id uint, measurement *entity.Measurement) error {
	return repo.db.WithContext(ctx).Where("interface_id = ?", id).First(measurement).Error
}

func (repo measurementRepository) Upsert(ctx context.Context, measurement *entity.Measurement) error {
	return repo.db.WithContext(ctx).Clauses(clause.OnConflict{
		Columns:   []clause.Column{{Name: constants.MEASUREMENT_COLUMN_IF_INDEX}},
		UpdateAll: true,
	}).Create(measurement).Error
}
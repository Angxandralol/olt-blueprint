package controller

import (
	"os"

	"github.com/jedib0t/go-pretty/v6/table"
	"github.com/metalpoch/olt-blueprint/common/constants"
	"github.com/metalpoch/olt-blueprint/update/model"
	"github.com/metalpoch/olt-blueprint/update/usecase"
	"gorm.io/gorm"
)

type deviceController struct {
	Usecase usecase.DeviceUsecase
}

func newDeviceController(db *gorm.DB) *deviceController {
	return &deviceController{Usecase: *usecase.NewDeviceUsecase(db)}
}

func AddDevice(db *gorm.DB, device *model.AddDevice) error {
	return newDeviceController(db).Usecase.Add(device)
}

func ShowAllDevices(db *gorm.DB, csv bool) ([]model.Device, error) {
	devices, err := newDeviceController(db).Usecase.GetAll()
	if err != nil {
		return nil, err
	}

	t := table.NewWriter()
	t.SetOutputMirror(os.Stdout)
	t.AppendHeader(table.Row{
		"ID",
		"IP",
		"Community",
		"SysName",
		"SysLocation",
		"Template ID",
		"Is Alive",
		"Last Check",
		"Created at",
		"Updated at",
	})

	for _, device := range devices {
		t.AppendRow(table.Row{
			device.ID,
			device.IP,
			device.Community,
			device.SysName,
			device.SysLocation,
			device.TemplateID,
			device.IsAlive,
			device.LastCheck.Local().Format(constants.FORMAT_DATE),
			device.CreatedAt.Local().Format(constants.FORMAT_DATE),
			device.UpdatedAt.Local().Format(constants.FORMAT_DATE),
		})
		t.AppendSeparator()
	}
	if csv {
		t.RenderCSV()
	} else {
		t.Render()
	}

	return nil, nil
}

func GetDeviceWithOIDRows(db *gorm.DB) ([]*model.DeviceWithOID, error) {
	return newDeviceController(db).Usecase.GetDeviceWithOIDRows()
}

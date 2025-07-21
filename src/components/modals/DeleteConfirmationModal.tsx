
import { Modal } from 'antd';
import type { DeleteConfirmationModalProps } from '../../typs/prop.type';

export default function DeleteConfirmationModal({
  open,
  onConfirm,
  onCancel,
}: DeleteConfirmationModalProps) {
  return (
    <Modal
      title="Confirm Delete"
      open={open}
      onOk={onConfirm}
      onCancel={onCancel}
      okText="Yes"
      okType="danger"
      cancelText="No"
    >
      <p>Are you sure you want to delete this ticket?</p>
    </Modal>
  );
}

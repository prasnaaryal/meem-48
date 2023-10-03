import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';

function ConfirmDialog({
  title,
  content,
  onConfirm,
  open,
  setOpen,
  onDecline,
  loading
}: {
  title?: string;
  content?: string;
  onConfirm?: (value: any) => void;
  onDecline?: () => void;
  setOpen: any;
  open?: any;
  loading?: boolean;
}) {
  return (
    open && (
      <Dialog open={open ? true : false} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {title ??
                'Are you sure you want to delete the ' + open?.name ??
                open?.title ??
                'item' + ' ?'}
            </DialogTitle>
            <DialogDescription>{content ?? ''}</DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-7">
            <Button
              disabled={loading}
              onClick={() => onConfirm && onConfirm(open)}
            >
              Confirm
            </Button>
            <Button onClick={() => onDecline && onDecline()}>Decline</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  );
}

export default ConfirmDialog;

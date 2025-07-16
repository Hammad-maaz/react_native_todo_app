import {
  Dimensions,
  DateTimePickerModal
} from '../../exports';

const { width, height } = Dimensions.get('window');

interface DateTimePickerModelProps {
  onCofirm: (date: Date) => void;
  onCancel: () => void;
  mode: 'date' | 'time';
  visible: boolean;
  display?: 'default' | 'spinner' | 'inline';
}

const DateTimePickerModel: React.FC<DateTimePickerModelProps> = (props) => {
  return(
    <DateTimePickerModal 
      mode={props.mode} 
      isVisible={props.visible} 
      onConfirm={props.onCofirm} 
      onCancel={props.onCancel} />
  )
};

export default DateTimePickerModel;

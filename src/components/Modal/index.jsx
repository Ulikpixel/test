import React from "react";
import { ModalSection, Popup, CloseBtn, Field, Hr, Btn } from "./style";
import { observer } from "mobx-react-lite";
import ColorPicker from "./ColorPicker";
import Select from "./Select";
import { SCHEDULE } from "../../constains";
import Counter from "./Counter";
import Timer from "./Timer";
import { Text, Flex } from "../styled";
import Warning from "./Warning";
import Weeks from "./Weeks";

const Modal = observer(({ modal, setModal, store }) => {
  const { types, weeks, teachers, audience, breaks } = SCHEDULE;
  const closeModal = () => setModal(false);
  const sendRequest = () => {
    store.status
      ? console.log(store.schedule)
      : alert("Заполните необходимые поля");
  };
  return (
    <>
      <ModalSection modal={modal}>
        <CloseBtn onClick={closeModal}>&#x2715;</CloseBtn>
        <Text size="25px" opacity="0.7" weight="bold">
          Редактирование расписания
        </Text>
        <Hr />
        <Flex margin="0 0 20px">
          <Field
            value={store.school}
            onChange={({ target }) => store.setSchool(target.value)}
          />
          <ColorPicker store={store} />
        </Flex>
        <Flex margin="0 0 20px">
          <Select
            options={types}
            value={store.type}
            onChange={({ value }) => store.setType(value)}
          />
          <Counter
            count={store.totalHour}
            setCount={store.setTotalHour}
            text="Всего часов"
          />
          <Timer {...store.date} />
        </Flex>
        <Weeks weeks={weeks} store={store} />
        <Flex margin="0 0 20px">
          <Select
            options={breaks}
            placeholder="Без перерыва"
            onChange={({ value }) => store.setBreak(value)}
          />
          <Counter count={store.hourDay} setCount={store.setHourDay} text="часов в день" />
          <Timer {...store.time} />
        </Flex>
        <Flex margin="0 0 20px">
          <Select
            options={teachers}
            placeholder="Выберите преподователя на это время"
            onChange={({ value }) => store.setTeacher(value)}
          />
          <Select
            options={audience}
            placeholder="Аудитория"
            onChange={({ value }) => store.setAudience(value)}
          />
        </Flex>
        <Warning />
        <Hr />
        <Flex justify="flex-end">
          <Btn onClick={closeModal}>Отмена</Btn>
          <Btn border onClick={sendRequest}>
            Добавить расписание
          </Btn>
        </Flex>
      </ModalSection>
      <Popup modal={modal} onClick={closeModal} />
    </>
  );
});

export default Modal;

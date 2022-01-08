import * as S from "./style"

interface MessageBoxProps {
  title: string
  icon: string
  description: string
  footerText: string
}

const MessageBox: React.FC<MessageBoxProps> = ({ title, description, icon, footerText}) => {
  return (
    <S.MessageBoxWrapper>
      <header>
        <h1>{title}
          <img src={icon} alt={title} />
        </h1>
        <p>{description}</p>
      </header>
      <footer><span>{footerText}</span></footer>
    </S.MessageBoxWrapper>
  )
}

export default MessageBox
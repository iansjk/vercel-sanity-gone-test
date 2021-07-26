const AttackPowerIcon: React.VFC<React.HTMLAttributes<SVGElement>> = (
  props
) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.42857 0.714286L0 0L0.714286 1.42857L4.28571 5L2.14286 7.14286L1.42857 6.42857H0.714286V7.14286L1.42857 7.85714L0 9.28571V10H0.714286L2.14286 8.57143L2.85714 9.28571H3.57143V8.57143L2.85714 7.85714L5 5.71429L7.14286 7.85714L6.42857 8.57143V9.28571H7.14286L7.85714 8.57143L9.28571 10H10V9.28571L8.57143 7.85714L9.28571 7.14286V6.42857H8.57143L7.85714 7.14286L5.71429 5L9.28571 1.42857L10 0L8.57143 0.714286L5 4.28571L1.42857 0.714286Z"
        fill="#E3E1EF"
      />
    </svg>
  );
};
export default AttackPowerIcon;
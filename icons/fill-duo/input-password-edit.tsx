import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InputPasswordEdit({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M9.6689 12.7207C9.7793 12.4014 9.9628 12.1064 10.2021 11.8662L13.3662 8.70209C13.9785 8.08879 14.7949 7.75092 15.6641 7.75092C16.1339 7.75092 16.5848 7.8573 17 8.0451V6.74988C17 5.23278 15.767 3.99988 14.25 3.99988H3.75C2.233 3.99988 1 5.23278 1 6.74988V11.2499C1 12.767 2.233 13.9999 3.75 13.9999H9.22771L9.6689 12.7207Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.5 10C6.052 10 6.5 9.552 6.5 9C6.5 8.448 6.052 8 5.5 8C4.948 8 4.5 8.448 4.5 9C4.5 9.552 4.948 10 5.5 10Z"
          fill={fill}
        />
        <path
          d="M9 10C9.552 10 10 9.552 10 9C10 8.448 9.552 8 9 8C8.448 8 8 8.448 8 9C8 9.552 8.448 10 9 10Z"
          fill={fill}
        />
        <path
          d="M17.2374 10.0986L16.9015 9.76268C16.2199 9.08008 15.1085 9.08008 14.4269 9.76268L11.2658 12.9238C11.1857 13.0044 11.1242 13.102 11.0871 13.2094L10.1662 15.8803C10.0724 16.1518 10.1418 16.4526 10.3449 16.6552C10.4875 16.7983 10.6799 16.8749 10.8752 16.8749C10.9572 16.8749 11.0393 16.8617 11.1193 16.8339L13.7902 15.913C13.8986 15.8759 13.9963 15.8149 14.0763 15.7343L17.2374 12.5732C17.5685 12.2426 17.7501 11.8032 17.7501 11.3359C17.7501 10.8681 17.5675 10.4287 17.2374 10.0986Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default InputPasswordEdit;

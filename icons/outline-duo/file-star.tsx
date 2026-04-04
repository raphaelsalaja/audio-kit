import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileStar({
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
          d="M14 11.068L15.004 13.103L17.25 13.429L15.625 15.013L16.009 17.25L14 16.194L11.991 17.25L12.375 15.013L10.75 13.429L12.996 13.103L14 11.068Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.3359 1.75C10.48 1.75 10.6212 1.78131 10.75 1.83984V5.25C10.75 5.802 11.198 6.25 11.75 6.25H15.1602C15.2188 6.37884 15.25 6.51984 15.25 6.66406L14.9521 9.0293C14.7059 8.91431 14.4374 8.84393 14.1592 8.82422L14 8.81836C13.2959 8.81845 12.6431 9.14696 12.2227 9.68848L12.1416 9.7998L12.0898 9.88184L12.0361 9.97266L11.9814 10.0723L11.5 11.0469L10.4268 11.2031C9.63349 11.3184 8.96408 11.846 8.66504 12.583L8.61035 12.7324C8.34642 13.545 8.46644 14.576 9.08105 15.1752L9.64392 15.7232C9.618 16.0796 9.31719 16.353 8.95994 16.345L4.75 16.25C3.645 16.25 2.75 15.355 2.75 14.25V3.75C2.75 2.645 3.645 1.75 4.75 1.75H10.3359Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 6.75H7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 9.75H10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.16 6.24999H11.75C11.198 6.24999 10.75 5.80199 10.75 5.24999V1.85199"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 11.068L15.004 13.103L17.25 13.429L15.625 15.013L16.009 17.25L14 16.194L11.991 17.25L12.375 15.013L10.75 13.429L12.996 13.103L14 11.068Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 8.34299V6.66399C15.25 6.39889 15.145 6.14399 14.957 5.95699L11.043 2.04288C10.855 1.85488 10.601 1.74988 10.336 1.74988H4.75C3.645 1.74988 2.75 2.64588 2.75 3.74988V14.2499C2.75 15.3539 3.645 16.2499 4.75 16.2499H9.1188"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default FileStar;

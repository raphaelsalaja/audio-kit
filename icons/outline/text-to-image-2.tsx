import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextToImage2({
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
          d="M8.10199 16.142L13.207 11.043C13.598 10.652 14.231 10.652 14.621 11.043L17.251 13.673"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.501 6.5V4.75C12.501 3.369 11.382 2.25 10.001 2.25H9.25098"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.001 5.25L12.501 7L11.001 5.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.3585 6.08369C16.8968 6.44219 17.251 7.0549 17.251 7.75V14.25C17.251 15.355 16.356 16.25 15.251 16.25H8.75098C7.64598 16.25 6.75098 15.355 6.75098 14.25V7.75C6.75098 6.7141 7.53757 5.8627 8.54637 5.7603"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.001 10C9.44998 10 9.00098 9.551 9.00098 9C9.00098 8.449 9.44998 8 10.001 8C10.552 8 11.001 8.449 11.001 9C11.001 9.551 10.552 10 10.001 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3.25098 1.25V7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75098 1.25H0.750977"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.74402 13.769L3.79802 13.454L3.48201 12.507C3.38001 12.201 2.87301 12.201 2.77101 12.507L2.45502 13.454L1.50902 13.769C1.35602 13.82 1.25201 13.963 1.25201 14.125C1.25201 14.287 1.35602 14.43 1.50902 14.481L2.45502 14.796L2.77101 15.743C2.82201 15.896 2.96502 15.999 3.12602 15.999C3.28702 15.999 3.43102 15.895 3.48102 15.743L3.79701 14.796L4.74301 14.481C4.89601 14.43 5.00002 14.287 5.00002 14.125C5.00002 13.963 4.89702 13.82 4.74402 13.769Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M1.75098 11C2.16498 11 2.50098 10.664 2.50098 10.25C2.50098 9.836 2.16498 9.5 1.75098 9.5C1.33698 9.5 1.00098 9.836 1.00098 10.25C1.00098 10.664 1.33698 11 1.75098 11Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default TextToImage2;

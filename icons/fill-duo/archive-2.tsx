import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Archive2({
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
          d="M14.75 6H3.25C2.8359 6 2.5 6.3359 2.5 6.75V13.25C2.5 14.7666 3.7334 16 5.25 16H12.75C14.2666 16 15.5 14.7666 15.5 13.25V6.75C15.5 6.3359 15.1641 6 14.75 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.58841 6.86181C1.73781 6.86181 0.989809 6.23921 0.858909 5.37351L0.634311 3.89061C0.490311 2.93601 1.14941 2.04251 2.10311 1.89791L14.4624 0.0288128C15.4238 -0.111287 16.3105 0.543913 16.4546 1.49801L16.6792 2.98041C16.8232 3.93501 16.1641 4.82811 15.2104 4.97261L2.85101 6.84221C2.76261 6.85541 2.67481 6.86181 2.58841 6.86181Z"
          fill={fill}
        />
        <path
          d="M11.7803 11.0303L9.53029 13.2803C9.38379 13.4268 9.19189 13.5 8.99999 13.5C8.80809 13.5 8.61619 13.4268 8.46969 13.2803L6.21969 11.0303C5.92669 10.7373 5.92669 10.2627 6.21969 9.9698C6.51269 9.6769 6.98729 9.6768 7.28019 9.9698L8.24989 10.9395V8.25C8.24989 7.8359 8.58579 7.5 8.99989 7.5C9.41399 7.5 9.74989 7.8359 9.74989 8.25V10.9395L10.7196 9.9698C11.0126 9.6768 11.4872 9.6768 11.7801 9.9698C12.073 10.2628 12.0733 10.7374 11.7803 11.0303Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Archive2;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjIncreaseSizeY({
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
          d="M13.2505 4.99951C14.7697 4.99951 16.0005 6.2303 16.0005 7.74951L16.0005 10.2495C16.0005 11.7687 14.7697 12.9995 13.2505 12.9995L4.7505 12.9995C3.23129 12.9995 2.0005 11.7687 2.0005 10.2495L2.0005 7.74951C2.0005 6.2303 3.23129 4.99951 4.7505 4.99951L13.2505 4.99951Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.9405 14.9245C10.8305 14.6665 10.5855 14.4995 10.3165 14.4995L7.6845 14.4995C7.4155 14.4995 7.1705 14.6665 7.0605 14.9245C6.9505 15.1825 6.9945 15.4865 7.1735 15.6985L8.4895 17.2575C8.6195 17.4115 8.80546 17.5005 9.00146 17.5005C9.19746 17.5005 9.38351 17.4115 9.51251 17.2585L10.8285 15.6995C11.0075 15.4885 11.0515 15.1845 10.9415 14.9255L10.9405 14.9245Z"
          fill={secondaryfill}
        />
        <path
          d="M10.9405 3.07451C10.8305 3.33251 10.5855 3.49951 10.3165 3.49951L7.6845 3.49951C7.4155 3.49951 7.1705 3.33251 7.0605 3.07451C6.9505 2.81651 6.9945 2.51251 7.1735 2.30051L8.48846 0.742508C8.61846 0.588508 8.80548 0.499512 9.00048 0.499512C9.19548 0.499512 9.38247 0.588509 9.51147 0.741509L10.8275 2.30051C11.0065 2.51151 11.0505 2.81551 10.9405 3.07451Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ObjIncreaseSizeY;

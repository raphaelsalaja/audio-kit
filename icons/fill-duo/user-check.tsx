import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserCheck({
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
          d="M14 9.99951C11.7939 9.99951 10 11.7939 10 13.9995C10 16.2051 11.7939 17.9995 14 17.9995C16.2061 17.9995 18 16.2051 18 13.9995C18 11.7939 16.2061 9.99951 14 9.99951ZM16.3076 13.2515L14.0576 15.7515C13.7742 16.066 13.2687 16.0797 12.9697 15.7799L11.7197 14.5299C11.4267 14.2369 11.4267 13.7623 11.7197 13.4694C12.0127 13.1765 12.4873 13.1764 12.7802 13.4694L13.4716 14.1603L15.1923 12.2477C15.4706 11.9411 15.9433 11.9157 16.2519 12.192C16.5595 12.4693 16.5849 12.9434 16.3076 13.2515Z"
          fill={fill}
        />
        <path
          d="M11.1061 9.32314C9.54246 10.2938 8.49993 12.0266 8.49993 13.9995C8.49993 15.1039 8.82662 16.1331 9.38854 16.9954C9.26034 16.9985 9.13079 17 8.99993 17C6.99277 17 5.29497 16.6354 4.01253 16.2313C2.74419 15.8317 2.05155 14.4186 2.60511 13.1674C3.69052 10.7157 6.14161 9 8.99993 9C9.73429 9 10.4418 9.11325 11.1061 9.32314Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 7.50049C10.7952 7.50049 12.25 6.04543 12.25 4.25049C12.25 2.45554 10.7952 1.00049 9 1.00049C7.20482 1.00049 5.75 2.45554 5.75 4.25049C5.75 6.04543 7.20482 7.50049 9 7.50049Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default UserCheck;

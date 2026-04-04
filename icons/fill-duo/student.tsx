import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Student({
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
          d="M9 12C6.21287 12 3.75882 13.4271 2.32789 15.5856C2.17525 15.8158 2.16154 16.1114 2.29221 16.3548C2.42287 16.5981 2.67676 16.75 2.953 16.75H15.047C15.3232 16.75 15.5771 16.5982 15.7078 16.3548C15.8384 16.1115 15.8248 15.816 15.6722 15.5857C14.2412 13.4259 11.787 12 9 12Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5 6.5C5 4.29093 6.79082 2.5 9 2.5C11.2092 2.5 13 4.29093 13 6.5C13 8.70907 11.2092 10.5 9 10.5C6.79082 10.5 5 8.70907 5 6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.49964 0.151025C9.18087 0.0126451 8.81878 0.0117124 8.4984 0.151879L2.96668 2.58507C2.17212 2.93644 2.17212 4.06356 2.96668 4.41493L8.49935 6.85096C8.81812 6.98934 9.18122 6.99027 9.5016 6.85011L14.0805 4.83521C14.1071 6.02534 14.2893 7.25454 14.8304 8.32686C15.017 8.69666 15.468 8.84519 15.8378 8.65859C16.2076 8.472 16.3562 8.02095 16.1696 7.65114C15.7712 6.86157 15.6233 5.86404 15.5871 5.01538C15.5693 4.59967 15.579 4.23772 15.593 3.98091C15.6006 3.84199 15.6094 3.7348 15.6157 3.66782C15.6847 3.24746 15.4906 2.78829 15.0333 2.58607L9.49964 0.151025Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Student;

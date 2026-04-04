import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserAlien({
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
          d="M4.51709 6.02635C4.51709 3.5507 6.52435 1.54344 9 1.54344C11.4757 1.54344 13.4829 3.5507 13.4829 6.02635C13.4829 7.33246 12.7084 8.55826 11.8554 9.41835C11.4188 9.85859 10.9332 10.233 10.4576 10.5013C9.99726 10.761 9.48219 10.9576 9 10.9576C8.51781 10.9576 8.00274 10.761 7.5424 10.5013C7.0668 10.233 6.5812 9.85859 6.14459 9.41835C5.2916 8.55826 4.51709 7.33246 4.51709 6.02635Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.917 7.5005C9.687 7.5005 9.5 7.3135 9.5 7.0835C9.5 5.9335 10.434 5.0005 11.583 5.0005C11.813 5.0005 12 5.1875 12 5.4175C12 6.5675 11.066 7.5005 9.917 7.5005Z"
          fill={fill}
        />
        <path
          d="M6.417 5.0005C7.567 5.0005 8.5 5.9345 8.5 7.0835C8.5 7.3135 8.313 7.5005 8.083 7.5005C6.933 7.5005 6 6.5665 6 5.4175C6 5.1875 6.187 5.0005 6.417 5.0005Z"
          fill={fill}
        />
        <path
          d="M7.4944 12.1416C5.34142 12.552 3.49458 13.8257 2.32789 15.5856C2.17525 15.8158 2.16154 16.1114 2.29221 16.3548C2.42287 16.5981 2.67676 16.75 2.953 16.75H15.047C15.3232 16.75 15.5771 16.5982 15.7078 16.3548C15.8384 16.1115 15.8248 15.816 15.6722 15.5857C14.5055 13.8248 12.6586 12.5517 10.5057 12.1416C10.0594 12.3217 9.54459 12.4576 9 12.4576C8.45547 12.4576 7.94075 12.3217 7.4944 12.1416Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default UserAlien;

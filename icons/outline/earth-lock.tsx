import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EarthLock({
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
          d="M13.0008 2.98069L11.4893 2.9094C10.4948 2.8625 9.73551 3.7861 9.97371 4.7527L10.2457 5.8562C10.3051 6.0973 10.2086 6.3499 10.0036 6.4899C9.83802 6.603 9.62661 6.6251 9.44121 6.5487L8.51411 6.1666C7.78921 5.8678 6.96161 5.9623 6.32271 6.4169C5.75691 6.8194 5.40531 7.4578 5.36751 8.1511L5.29651 9.4532"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 13.75H12.25C11.698 13.75 11.25 14.1977 11.25 14.75V16.25C11.25 16.8023 11.698 17.25 12.25 17.25H16.25C16.802 17.25 17.25 16.8023 17.25 16.25V14.75C17.25 14.1977 16.802 13.75 16.25 13.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 13.75V12.25C12.75 11.422 13.422 10.75 14.25 10.75C15.078 10.75 15.75 11.422 15.75 12.25V13.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.59167 5.7457C3.02027 6.8697 3.97027 8.6883 5.49657 9.6832C5.92247 9.9178 6.90028 10.6811 6.83228 11.8894C6.73908 13.5437 6.95217 13.4437 7.75087 14.0381C8.16087 14.3433 8.28497 15.465 8.22507 16.2051"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75421 9.8474C6.90811 9.6041 8.33631 9.1472 9.99171 10.7675"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.1946 8.0994C15.7511 4.5203 12.6991 1.75 9 1.75C4.9959 1.75 1.75 4.9959 1.75 9C1.75 12.7428 4.5862 15.8232 8.2267 16.2092"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default EarthLock;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SleepingTime({
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
          d="M8.54419 1.47446C8.70875 1.73227 8.70028 2.06417 8.52278 2.31324C7.88003 3.21522 7.5 4.31129 7.5 5.49999C7.5 8.53778 9.96222 11 13 11C14.0509 11 15.029 10.7009 15.8667 10.1868C16.1275 10.0267 16.4594 10.0412 16.7053 10.2233C16.9513 10.4054 17.0619 10.7186 16.9848 11.0148C16.0904 14.4535 12.9735 17 9.25 17C4.83179 17 1.25 13.4182 1.25 8.99999C1.25 5.08452 4.06262 1.83364 7.77437 1.14073C8.07502 1.0846 8.37963 1.21666 8.54419 1.47446Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.5 2.25C11.5 1.83579 11.8358 1.5 12.25 1.5H15.75C16.0365 1.5 16.2979 1.66316 16.4237 1.92049C16.5496 2.17781 16.5179 2.48435 16.342 2.71046L13.7835 6H15.75C16.1642 6 16.5 6.33579 16.5 6.75C16.5 7.16421 16.1642 7.5 15.75 7.5H12.25C11.9636 7.5 11.7021 7.33684 11.5763 7.07951C11.4504 6.82219 11.4821 6.51565 11.658 6.28954L14.2165 3H12.25C11.8358 3 11.5 2.66421 11.5 2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SleepingTime;

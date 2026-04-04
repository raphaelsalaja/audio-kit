import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LockPassword({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M15 10L17.6584 8.67082C18.5029 8.24853 19.4971 8.24853 20.3416 8.67082L22.2111 9.60557C22.9482 9.9741 22.9482 11.0259 22.2111 11.3944L20 12.5"
          stroke={fill}
        />
        <path
          d="M22 17V13.5L12 18.5V22L22 17Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M12 18.5V21.8264" stroke={fill} />
        <path
          d="M22 13.5L12.6708 18.1646C12.2485 18.3757 11.7515 18.3757 11.3292 18.1646L2 13.5"
          stroke={fill}
        />
        <path
          d="M12.5 13.25L12 13.5L11.5 13.75"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M12.6708 21.6646L21.4472 17.2764C21.786 17.107 22 16.7607 22 16.382V14.118C22 13.7393 21.786 13.393 21.4472 13.2236L12.6708 8.83541C12.2485 8.62426 11.7515 8.62426 11.3292 8.83541L2.55279 13.2236C2.214 13.393 2 13.7393 2 14.118V16.382C2 16.7607 2.214 17.107 2.55279 17.2764L11.3292 21.6646C11.7515 21.8757 12.2485 21.8757 12.6708 21.6646Z"
          stroke={fill}
        />
        <path
          d="M4.69067 5.6731L3.34536 7.83653M3.34536 7.83653L2.00006 9.99996M3.34536 7.83653L2.00006 6.99996M3.34536 7.83653L4.69067 8.6731"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M6.93292 4.56747L8.27823 5.40403M8.27823 5.40403L9.62354 6.2406M8.27823 5.40403L9.62354 3.2406M8.27823 5.40403L6.93292 7.56747"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M14.5562 0.807983L13.2108 2.97142M13.2108 2.97142L11.8655 5.13485M13.2108 2.97142L11.8655 2.13485M13.2108 2.97142L14.5562 3.80798"
          stroke={fill}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default LockPassword;

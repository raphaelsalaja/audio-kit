import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HatSanta({
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
          d="M2.25451 6.55605C3.1111 3.35635 6.02899 1 9.5 1C13.6422 1 17 4.35779 17 8.5V13.5C17 13.7533 16.8721 13.9895 16.66 14.128C16.4479 14.2665 16.1802 14.2885 15.9482 14.1866L15.0908 14.1669C14.8583 14.2865 14.5803 14.2764 14.3571 14.1403C14.1339 14.0041 13.9977 13.7615 13.9977 13.5V9.37356L2.84208 7.4874C2.63652 7.44923 2.45623 7.327 2.34468 7.15018C2.23313 6.97336 2.20045 6.758 2.25451 6.55605Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13 15C13 13.6191 14.1199 12.5 15.5 12.5C16.8801 12.5 18 13.6191 18 15C18 16.3809 16.8801 17.5 15.5 17.5C14.1199 17.5 13 16.3809 13 15Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.76199 13.091C8.27599 12.915 7.59901 12.962 7.25101 13.533C6.90201 12.962 6.22401 12.915 5.73801 13.091C4.76901 13.442 4.06601 14.554 3.05701 14.429C2.84901 14.403 2.68301 14.595 2.77801 14.772C3.31201 15.768 4.369 16.001 4.961 16.001C5.64 16.001 6.634 15.587 7.25 14.66C7.866 15.588 8.86 16.001 9.539 16.001C10.131 16.001 11.189 15.768 11.722 14.772C11.817 14.595 11.65 14.403 11.443 14.429C10.435 14.556 9.73099 13.442 8.76199 13.091Z"
          fill={fill}
        />
        <path
          d="M1 8.25C1 7.00726 2.00792 6 3.25 6H12.25C13.4921 6 14.5 7.00726 14.5 8.25V8.75C14.5 9.99274 13.4921 11 12.25 11H3.25C2.00792 11 1 9.99274 1 8.75V8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HatSanta;

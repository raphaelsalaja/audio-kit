import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Investment2({
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
          d="M19.5 14.6472L16.5 16.6472L15.5 16.7575V19.6472L12.5 21.6472L8 22.1472L3.5 21.1472L1.5 19.6472V17.1472L4.5 18.6472L8.5 19.1472L12.5 18.6472L15.2998 16.78L12 17.1472L7.5 16.1472L5.5 14.6472V12.1472L8.5 13.6472L12.5 14.1472L16.5 13.6472L19.5 11.6472V14.6472Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M5.5 13.4359C3.13505 13.9173 1.5 14.9504 1.5 16.1472C1.5 17.804 4.63401 19.1472 8.5 19.1472C11.6809 19.1472 14.3663 18.2378 15.2181 16.9927"
          stroke={fill}
        />
        <path
          d="M19.5 11.1472C19.5 12.804 16.366 14.1472 12.5 14.1472C8.63401 14.1472 5.5 12.804 5.5 11.1472C5.5 9.4903 8.63401 8.14715 12.5 8.14715C16.366 8.14715 19.5 9.4903 19.5 11.1472Z"
          stroke={fill}
        />
        <path
          d="M1.5 16.1472V19.1472C1.5 20.804 4.63401 22.1472 8.5 22.1472C12.366 22.1472 15.5 20.804 15.5 19.1472V16.6472"
          stroke={fill}
        />
        <path
          d="M5.5 11.1472V14.1472C5.5 15.804 8.63401 17.1472 12.5 17.1472C16.366 17.1472 19.5 15.804 19.5 14.1472V11.1472"
          stroke={fill}
        />
        <path d="M12.5 2.87848V11.1998" stroke={fill} />
        <path d="M10 11.1472H15" stroke={fill} strokeLinecap="round" />
        <path
          d="M22.4742 7.5619C21.924 1.41263 19.0007 1.06206 16.1979 2.69696C10.4855 6.02914 20.2899 6.41751 22.2643 7.68054C22.3463 7.73304 22.4828 7.65893 22.4742 7.5619Z"
          stroke={fill}
        />
        <path
          d="M2.52491 7.58181C3.09113 1.36838 5.99598 1.06011 8.80209 2.69695C14.5269 6.03636 4.68881 6.50194 2.72595 7.70016C2.6445 7.74988 2.51625 7.67684 2.52491 7.58181Z"
          stroke={fill}
        />
        <path
          d="M12.5 2.87842L13.6056 2.32563C14.1686 2.0441 14.8314 2.0441 15.3944 2.32563L18.5 3.87842"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M12.5 2.87848L11.3944 2.32569C10.8314 2.04417 10.1686 2.04417 9.60557 2.32569L6.5 3.87848"
          stroke={fill}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default Investment2;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleSignal({
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
          d="M9 1C4.58168 1 1 4.58179 1 9C1 13.4182 4.58168 17 9 17C13.4183 17 17 13.4182 17 9C17 4.58179 13.4183 1 9 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.70219 8.95108C7.28965 8.36492 8.10281 8 8.99994 8C9.89779 8 10.7113 8.36473 11.2983 8.95167C11.5912 9.24456 11.5912 9.71944 11.2983 10.0123C11.0054 10.3052 10.5305 10.3052 10.2376 10.0123C9.92056 9.69527 9.4841 9.5 8.99994 9.5C8.51708 9.5 8.08021 9.69508 7.76168 10.0129C7.46846 10.3055 6.99359 10.305 6.70102 10.0117C6.40845 9.71853 6.40897 9.24365 6.70219 8.95108Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.93395 7.18338C5.97365 6.14482 7.41199 5.5 8.99998 5.5C10.5877 5.5 12.0262 6.14359 13.0663 7.18367C13.3592 7.47656 13.3592 7.95144 13.0663 8.24433C12.7734 8.53722 12.2986 8.53722 12.0057 8.24433C11.2358 7.47441 10.1743 7 8.99998 7C7.82597 7 6.76432 7.47518 5.99403 8.24462C5.70097 8.53735 5.2261 8.53709 4.93337 8.24404C4.64063 7.95098 4.6409 7.47611 4.93395 7.18338Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 12C9.414 12 9.75 11.664 9.75 11.25C9.75 10.836 9.414 10.5 9 10.5C8.586 10.5 8.25 10.836 8.25 11.25C8.25 11.664 8.586 12 9 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleSignal;

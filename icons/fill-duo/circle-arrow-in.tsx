import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleArrowIn({
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
          d="M9 17C6.3096 17 3.81539 15.6597 2.32809 13.4141C2.09959 13.0689 2.1933 12.6036 2.539 12.375C2.8847 12.1455 3.34949 12.2407 3.57809 12.5859C4.78709 14.4106 6.8144 15.5 9 15.5C12.584 15.5 15.5 12.584 15.5 9C15.5 5.416 12.584 2.5 9 2.5C6.8145 2.5 4.78809 3.58941 3.57809 5.41461C3.34959 5.75881 2.8838 5.8536 2.539 5.625C2.1933 5.3965 2.09949 4.93069 2.32809 4.58539C3.81639 2.34029 6.3105 1 9 1C13.4111 1 17 4.5889 17 9C17 13.4111 13.4111 17 9 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.47 11.72C7.177 12.013 7.177 12.488 7.47 12.781C7.616 12.927 7.808 13.001 8 13.001C8.192 13.001 8.384 12.928 8.53 12.781L11.78 9.53103C12.073 9.23803 12.073 8.76299 11.78 8.46999L8.53 5.21999C8.237 4.92699 7.76199 4.92699 7.46899 5.21999C7.17599 5.51299 7.17599 5.98803 7.46899 6.28103L9.439 8.251H1.75C1.336 8.251 1 8.587 1 9.001C1 9.415 1.336 9.751 1.75 9.751H9.439L7.46899 11.721L7.47 11.72Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleArrowIn;

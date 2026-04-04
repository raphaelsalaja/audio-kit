import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AnimationObj({
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
          d="M13.0843 4.01084L16.2401 7.16567C17.2533 8.17877 17.2533 9.82224 16.2401 10.8353L13.0843 13.9911C12.0712 15.0042 10.4289 15.0042 9.41572 13.9911L6.25988 10.8353C5.24679 9.82221 5.24678 8.17884 6.25988 7.16574L9.41568 4.01084C10.4288 2.99785 12.0713 2.99785 13.0843 4.01084Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.53134 3.47065C6.82369 3.76409 6.82282 4.23896 6.52938 4.53131L2.82056 8.22643C2.3938 8.65361 2.39338 9.34697 2.82008 9.77419L6.5293 13.4686C6.82278 13.7609 6.82373 14.2358 6.53142 14.5293C6.23911 14.8227 5.76424 14.8237 5.47076 14.5314L1.76096 10.8364C0.74787 9.8233 0.747787 8.17788 1.76088 7.16479L5.47069 3.46869C5.76412 3.17634 6.23899 3.17722 6.53134 3.47065Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AnimationObj;

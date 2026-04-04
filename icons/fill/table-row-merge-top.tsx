import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowMergeTop({
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
          d="M16 13.25V4.99999C16 4.15229 15.6152 3.36521 14.9443 2.84081C14.6181 2.58591 14.1464 2.64352 13.8916 2.96972C13.6353 3.29492 13.6963 3.76855 14.0205 4.02245C14.3252 4.26075 14.5 4.61707 14.5 4.99987V8.99987H3.5V4.99987C3.5 4.61607 3.67481 4.25965 3.97951 4.02135C4.30571 3.76745 4.3657 3.29394 4.1084 2.96874C3.8535 2.64254 3.38179 2.58494 3.05569 2.83984C2.38479 3.36424 2 4.15129 2 4.99999V13.25C2 14.7666 3.2334 16 4.75 16H13.25C14.7666 16 16 14.7666 16 13.25Z"
          fill={fill}
        />
        <path
          d="M8.47011 0.219994L5.97011 2.71999C5.68021 3.01299 5.68021 3.48803 5.97011 3.78103C6.26011 4.07403 6.74011 4.07403 7.03021 3.78103L8.25022 2.56106V6.25002C8.25022 6.66402 8.59022 7.00002 9.00022 7.00002C9.41022 7.00002 9.75022 6.66402 9.75022 6.25002V2.56106L10.9702 3.78103C11.2602 4.07403 11.7402 4.07403 12.0303 3.78103C12.1803 3.63503 12.2503 3.443 12.2503 3.251C12.2503 3.059 12.1804 2.86697 12.0303 2.72097L9.53031 0.219994C9.24031 -0.0730059 8.76021 -0.0730059 8.47011 0.219994Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default TableRowMergeTop;

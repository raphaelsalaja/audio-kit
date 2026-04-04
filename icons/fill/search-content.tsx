import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SearchContent({
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
          d="M12.25,15.5H1.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H12.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M5.25,11.5H1.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M5.25,7.5H1.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M12.25,3.5H1.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H12.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M16.78,13.22l-2.405-2.405c.393-.593,.625-1.302,.625-2.065,0-2.068-1.682-3.75-3.75-3.75s-3.75,1.682-3.75,3.75,1.682,3.75,3.75,3.75c.763,0,1.472-.232,2.065-.625l2.405,2.405c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061Zm-7.78-4.47c0-1.241,1.009-2.25,2.25-2.25s2.25,1.009,2.25,2.25-1.009,2.25-2.25,2.25-2.25-1.009-2.25-2.25Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default SearchContent;

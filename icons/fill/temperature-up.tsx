import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TemperatureUp({
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
          d="M9.5,10.017V4.25c0-1.792-1.458-3.25-3.25-3.25s-3.25,1.458-3.25,3.25v5.767c-.647,.766-1,1.725-1,2.733,0,2.343,1.907,4.25,4.25,4.25s4.25-1.907,4.25-4.25c0-1.008-.353-1.967-1-2.733Zm-3.25,4.233c-.828,0-1.5-.672-1.5-1.5,0-.554,.304-1.032,.75-1.292V6c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v5.458c.446,.26,.75,.738,.75,1.292,0,.828-.672,1.5-1.5,1.5Z"
          fill={fill}
        />
        <path
          d="M16.78,4.72l-2.5-2.5c-.293-.293-.768-.293-1.061,0l-2.5,2.5c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l1.22-1.22v5.689c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V4.561l1.22,1.22c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default TemperatureUp;

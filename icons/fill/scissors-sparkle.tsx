import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScissorsSparkle({
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
          d="m16.157,12.0075l-1.262-.43-.421-1.27c-.137-.41-.812-.41-.949,0l-.421,1.27-1.262.43c-.204.06-.342.26-.342.47,0,.22.138.41.342.48l1.262.42.421,1.28c.068.2.26.34.475.34s.406-.14.475-.34l.421-1.28,1.262-.42c.204-.07.342-.26.342-.48,0-.21-.139-.41-.343-.47Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m9.25,7h-2.667c.258-.443.417-.951.417-1.5,0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3h5.25c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Zm-6.75-1.5c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14.528,2.468c-.294-.292-.769-.29-1.061.004L4.877,11.131s0,.001-.001.002c-.564.566-.876,1.317-.876,2.117s.312,1.555.879,2.121c.566.567,1.32.879,2.121.879s1.555-.312,2.121-.879c.567-.566.879-1.32.879-2.121s-.312-1.555-.879-2.121c-.385-.385-.87-.629-1.383-.752l6.794-6.849c.292-.294.29-.768-.004-1.06Zm-6.028,10.782c0,.4-.156.777-.439,1.061-.566.566-1.555.566-2.121,0-.283-.283-.439-.66-.439-1.061s.156-.777.439-1.061c.283-.284.66-.439,1.061-.439s.777.156,1.061.439c.284.283.439.66.439,1.061h-.001Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12.7635,7.75c0-.4142.3358-.75.75-.75h2.7365c.4142,0,.75.3358.75.75s-.3358.75-.75.75h-2.7365c-.4142,0-.75-.3358-.75-.75Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ScissorsSparkle;
